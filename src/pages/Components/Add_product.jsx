import React, { useEffect, useState } from "react";
import ModalProduct from "./Modal_Product";
import Cookies from "cookies-js";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Row,
  Col,
  Select,
  Space,
  Upload,
  notification,
} from "antd";

const Add_product = ({ load_product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = React.useRef();

  //////////////////////////////////(      MODAL      )////////////////////////////////////////

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

  //////////////////////////////////(      AÑADIR PRODUCTO      )////////////////////////////////////////

  const add_product = (values) => {
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
    const url = "http://localhost:3001/product";
    console.log(newProduct);
    axios
      .post(url, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Producto agregado exitosamente");
        notification.success({
          message: <strong>Producto agregado exitosamente</strong>,
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<AddIcon />}
        style={{
          fontSize: "16px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "5px" }}>Agregar producto</span>
      </Button>
       <ModalProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        beforeUpload={beforeUpload}
        addProduct={add_product}
        formRef={formRef}
      ></ModalProduct> 
    </>
  );
};

export default Add_product;
