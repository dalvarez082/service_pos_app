/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip, Popconfirm, Form, notification } from "antd";
import { Delete, EditNote, ErrorOutline } from "@mui/icons-material";
import Add_product from "./Add_product";
import Cookies from "cookies-js";
import axios from "axios";
import ModalProduct from "./Modal_Product";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Grid_list_product = ({ items, load_product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setcurrentId] = useState(false);
  const [formData, setFormData] = useState(false);
  const formRef = React.useRef();
  const [form] = Form.useForm();

  const [urlImg, setUrl] = useState("");

  const beforeUpload = async (file) => {
    const cloudName = "drrbzxlpc";
    console.log("file: ", file);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "k94bnc56");

    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const request = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    const data = await request.json();
    setUrl(data.secure_url);
  };

  const delete_product = async (id_product) => {
    const token = Cookies.get("token");
    try {
      const res = await axios.delete(
        `http://localhost:3001/product/${id_product}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      load_product();
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////(      EDITAR PRODUCTO      )////////////////////////////////////////

  const Edit_product = (item) => {
    setcurrentId(item.id_product);
    setIsModalOpen(true);
    console.log("item: ", item);
    console.log(form);
    setFormData({
      id_type: item.tipo,
      cc_user: "12345",
      nombre: item.nombre,
      precio: +item.precio,
      imagen: urlImg,
      descripcion: item.descripcion,
    });
  };

  const update_product = (values) => {
    const form = formRef.current;
    const newProduct = {
      id_type: values.tipo,
      cc_user: "12345",
      nombre: values.nombre,
      precio: +values.precio,
      imagen: urlImg,
      descripcion: values.descripcion,
    };
    const token = Cookies.get("token");
    const url = "http://localhost:3001/product/" + currentId;
    console.log(newProduct);
    axios
      .put(url, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Producto agregado exitosamente");
        notification.success({
          message: <strong>Producto modificado exitosamente</strong>,
          placement: "top",
          duration: 3,
          icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
          closeIcon: null,
        });

        load_product();
      })
      .catch((error) => {
        console.log("Ha ocurrido un error al agregar el producto:", error);
      });
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "black",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "16px",
          paddingBottom: "100px",
          maxHeight: "400px",
          overflowY: "scroll",
        }}
      >
        {items.map((item) => (
          <div key={item.id} style={{ cursor: "pointer" }}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              title={item.nombre}
              extra={[
                <div key="clear" style={{ marginLeft: "auto" }}>
                  <Tooltip title="Eliminar" color="red" key="eliminar">
                    <Popconfirm
                      title={
                        <strong style={{ fontSize: "18px" }}>
                          Confirmación
                        </strong>
                      }
                      description={
                        <strong>
                          ¿Está seguro que quiere eliminar este producto?
                        </strong>
                      }
                      onConfirm={() => delete_product(item.id_product)}
                      okText="Yes"
                      cancelText="No"
                      icon={
                        <ErrorOutline
                          style={{ color: "#FFD700", fontSize: "30px" }}
                        />
                      }
                    >
                      <Button type="text" icon={<Delete />} />
                    </Popconfirm>
                  </Tooltip>
                </div>,
              ]}
              description={item.description}
              actions={[
                <Tooltip title="Editar" color="cyan" key="edit">
                  <Button
                    type="primary"
                    onClick={() => Edit_product(item)}
                    icon={<EditNote />}
                  />
                </Tooltip>,
              ]}
            >
              <img
                alt="example"
                src={item.imagen}
                style={{ width: "250px", height: "250px" }}
              />
              <div style={{ marginTop: "8px" }}>{item.precio}</div>
            </Card>
          </div>
        ))}
      </div>

      <ModalProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        beforeUpload={beforeUpload}
        addProduct={update_product}
        formRef={formRef}
        form={form}
        formData={formData}
      ></ModalProduct>
    </div>
  );
};

export default Grid_list_product;
