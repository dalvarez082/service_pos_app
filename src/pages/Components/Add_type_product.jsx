import React, { useEffect, useState } from "react";
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
  notification, Tooltip

} from "antd";


const Add_type_product = ({load_type_product}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = React.useRef();
  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const form = formRef.current;
    form
      .validateFields()
      .then((values) => {
        console.log(values)
        add_type_product(values);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log("Error en el formulario:", error);
      });




    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { TextArea } = Input;


  const add_type_product = (values) => {
    const form = formRef.current;
    console.log(values)
      const newType_product= {

        nombre: values.nombre, 
        
        descripcion: values.descripcion       
      };
      console.log(values)

      const token = Cookies.get('token');
      const url = "http://localhost:3001/typeProduct";
      console.log(newType_product)      
      axios
        .post(url, newType_product, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then((res) => {
          console.log("Tipo producto agregado exitosamente");
          notification.success({
            message: <strong>Tipo producto agregado exitosamente</strong>,
            placement: "top",
            duration: 3,
            icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
            closeIcon: null,
          });
          form.resetFields();
          load_type_product();
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al agregar el producto:", error);
        });

  };

  return (
    <>
      <Tooltip title="Agregar" color="cyan" key="Agregar">
        <Button type="primary" onClick={showModal} icon={<AddIcon />} >
            Agregar tipo de producto 
        </Button>

      </Tooltip>
      <Modal
        title="agregar tipo"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        
      >
        <Form  
        ref={formRef}
        
        >
          <Form.Item label="Nombre" name="nombre">
          <Input placeholder="Ingrese el nombre del tipo" />
          </Form.Item>

          <Form.Item label="Descripcion" name="descripcion">
            <TextArea
              showCount
              maxLength={150}
              style={{ height: 120, resize: "none" }}
              placeholder="Puedes poner una descripcion de este tipo de producto "
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Add_type_product;
