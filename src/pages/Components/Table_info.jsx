import React from "react";
import { Space, Table, Button } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const Table_info = (props) => {
  const [data, setData] = useState([]);
  const { load_client, toggleDrawer, show_data_client } = props;

  const delete_client = (id) => {
    axios
      .delete(`http://localhost:3001/client/${id}`)
      .then((res) => {
        console.log("eliminado existoso");
        load_client().then((clients) => setData(clients));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    load_client().then(clients => setData(clients));
  }, [load_client]);

  const columns = [
    {
      title: "CC",
      dataIndex: "cc",
      key: "cc",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Alias",
      dataIndex: "alias",
      key: "alias",
    },
    {
      title: "Barrio",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Saldo",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Fecha nacimiento",
      dataIndex: "birth_date",
      key: "birth_date",
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditNote />}
            onClick={() => show_data_client(record)}
          />

          <Button
            type="danger"
            icon={<Delete />}
            onClick={() => delete_client(record.id)}
          />
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />;
};

export default Table_info;
