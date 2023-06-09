import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Tooltip, TextArea, Input, notification} from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import Cookies from "cookies-js";
import Form from "antd/es/form/Form";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Edit_type_product = ({load_type_product, item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentType, setCurrentType] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
    //setCurrentType(item)
    const form = formRef.current;
    form.setFieldsValue(item);


  };

  const handleOk = (values) => {
    const form = formRef.current;
    form
      .validateFields()
      .then((values) => {
        console.log(values)
        update_type_product(values)
        form.resetFields();
        setIsModalOpen(false);
      })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { TextArea } = Input;
  const formRef = React.useRef();


  const update_type_product = (values) => {
    const form = formRef.current;
    console.log(values)
      const newType_product= {

        nombre: values.nombre, 
        
        descripcion: values.descripcion       
      };
      console.log(values)

      const token = Cookies.get('token');
      const url = "http://localhost:3001/typeProduct/"+item.id_type;
      console.log(newType_product)      
      axios
        .put(url, newType_product, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then((res) => {
          console.log("Tipo producto editado exitosamente");
          notification.success({
            message: <strong>Tipo producto editado exitosamente</strong>,
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
      <Tooltip title="Editar" color="cyan" key="edit">
        <Button type="primary" onClick={()=>showModal()} icon={<EditNote />} />
      </Tooltip>
      <Modal
        title="Editar tipo producto"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form ref={formRef}>
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

export default Edit_type_product;
