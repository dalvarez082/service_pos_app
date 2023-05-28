import React from "react";
import Table_client from "./Components/Table_client";
import Search_client from "./Components/Search_client";
import Add_client from "./Components/Add_client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from 'cookies-js';
import { Form } from "antd";
import { Height, Search } from "@mui/icons-material";
import { Card } from "antd";


const Client = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [actionClient, setactionClient] = useState({
    description: " ",
    textButton: " ",
    add: false,
    currenid: null,
  });

  const [form] = Form.useForm();

  const load_client = async () => {
    try {
      const token = Cookies.get('token');

      const res = await axios.get("http://localhost:3001/client", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });


      const clients = res.data.map((client) => ({
        
        ...client,
        key: client.cc_client,
         fecha: client.fecha ? new Date(client.fecha).toISOString().slice(0, 10) : null,
      }));
      setData(clients);
      setCurrentData(clients);
    } catch (err) {
      console.log(err);
    }
  };

  const show_data_client = (record) => {
    // TODO: set correct format date
    const client_values = {
      key: record.cc_client,
      name: record.nombre,
      alias: record.alias_client,
      fecha: record.fecha,
      //birth_date: new Date(Date.now()).toLocaleDateString(),
      district: record.barrio,
      address: record.direccion,
      balance: record.saldo,
    };
    console.log("hola", client_values)

    setactionClient((prev) => {
      return {
        ...prev,
        description: "Editar cliente ",
        textButton: "Guardar ",
        add: false,
        currenid: record.cc_client,
      };
    });

    form.setFieldsValue(client_values);
    toggleDrawer();
  };


  const refresh_client = () => {
    load_client();
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const search = (value) => {
    console.log(value);
    axios
      .get("http://localhost:3001/client")
      .then((data) => {
        const list = data.data.filter((item) => item.cc === value);
        console.log(list);
        if (list.length >= 1) {
          setData(list);
        } else {
          setData(currentData);
        }
      })
      .catch((error) => {
        console.log("Ha ocurrido un error al agregar el cliente:", error);
      });
  };

  const reset = () => {
    setData(currentData);
  };

  return (
    <div>

      <Card style={{
        height :"15%"
      }}> 
        <Search_client key="search" search={search} reset={reset} />

        <Add_client
          key="add"
          refresh_client={refresh_client}
          visible={drawerVisible}
          onClose={toggleDrawer}
          show_data_client={show_data_client}
          form={form}
          actionClient={actionClient}
          setactionClient={setactionClient}
        />
      </Card>


      <Card  style={{

        marginTop : '15px',
        Height : '75%'



      }}>
        <Table_client
          load_client={load_client}
          toggleDrawer={toggleDrawer}
          show_data_client={show_data_client}
          actionClient={actionClient}
          data={data}
        />
      </Card>

    </div>
  );
};

export default Client;
