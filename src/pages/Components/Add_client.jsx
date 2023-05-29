import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  notification,
  Space,
} from "antd";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import React, { useRef, useEffect } from "react";
import axios from "axios";
import Cookies from 'cookies-js';
import moment from 'moment';

const Add_client = (props) => {
  const {
    refresh_client,
    visible,
    onClose,
    form,
    actionClient,
    setactionClient,
  } = props;
  const [open, setOpen] = useState(false);

  const formRef = React.useRef();

  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  const showDrawer = () => {
    setOpen(true);
    onClose();
    setactionClient((prev) => {
      return {
        ...prev,
        description: "Agregar nuevo cliente  ",
        textButton: "Agregar",
        add: true,
      };
    });
  };

  const handleOnClose = () => {
    const form = formRef.current;
    setOpen(false);
    onClose();
    form.resetFields();
  };

  const add_client = () => {
    const form = formRef.current;

    
    form.validateFields().then((values) => {
      const newClient = {
        cc_client: values.key,
        cc_user : "12345",
        nombre: values.name,        
        alias_client: values.alias,        
        fecha: moment(values.birth_date).toISOString(),
        barrio: values.district,
        direccion: values.address,
        saldo: 0,
        telefono:"3148921123"
      };
      const token = Cookies.get('token');
      const url = "http://localhost:3001/client";
      console.log(newClient)      
      axios
        .post(url, newClient, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then((res) => {
          console.log("Cliente agregado exitosamente");
          notification.success({
            message: <strong>Cliente agregado exitosamente</strong>,
            placement: "top",
            duration: 3,
            icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
            closeIcon: null,
          });
          form.resetFields();
          console.log(newClient);
          onClose();
          refresh_client();
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al agregar el cliente:", error);
        });
    });
  };

  const update_client = () => {
    const form = formRef.current;
    form.validateFields().then((values) => {

      const newClient = {
        cc_client: values.key,
        cc_user : "12345",
        nombre: values.name,        
        alias_client: values.alias,        
        fecha: moment(values.birth_date).toISOString(),
        barrio: values.district,
        direccion: values.address,
        saldo: 0,
        telefono:"3148921123"
      };
      const token = Cookies.get('token');
      console.log(newClient)  

      const cc_client = actionClient.currenid;
      console.log(cc_client)
      const url = "http://localhost:3001/client/";
      axios
        .put(url + cc_client, newClient,{
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then((res) => {
          console.log("Cliente agregado exitosamente");
          form.resetFields();
          console.log(newClient);
          onClose();
          refresh_client();
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al agregar el cliente:", error);
        });
    });
  };

  const buttonFuncion = () => {
    if (actionClient.add) {
      add_client();
    } else {
      update_client();
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<PersonAddIcon />}
        style={{
          fontSize: "16px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "5px" }}>Agregar Cliente</span>
      </Button>

      <Drawer
        style={{ borderRadius: "20px" }}
        title={actionClient.description}
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={handleOnClose}>Cancelar</Button>
            <Button type="primary" onClick={buttonFuncion}>
              {actionClient.textButton}
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark ref={formRef} form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="key"
                label="C.C"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa número de cédula",
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: "Por favor ingresa solo números",
                  },
                ]}
              >
                <Input placeholder="Ingresa la cédula" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el nombre",
                  },
                ]}
              >
                <Input placeholder="Ingresa el nombre" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="alias"
                label="alias"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el seudonombre",
                  },
                ]}
              >
                <Input placeholder="Ingresa el seudonombre" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Dirección"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa la dirección",
                  },
                  {
                    pattern: /^[A-Za-z0-9\s]+$/,
                    message: "Por favor ingresa una dirección válida",
                  },
                ]}
              >
                <Input placeholder="Ingresa la dirección" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="district"
                label="Barrio"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el barrio",
                  },
                ]}
              >
                <Input placeholder="Ingresa el barrio" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birth_date"
                label="Fecha de nacimiento"
                rules={[
                  {
                    required: true,
                    message: "Por favor escoje la fecha de nacimiento",
                  },
                ]}
              >
                <DatePicker
                  format={"YYYY-MM-DD"}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="balance"
                label="Saldo"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el saldo",
                  },
                  {
                    pattern: /^[0-9]+(\.[0-9]{1,3})?$/,
                    message: "Por favor ingresa solo números",
                  },
                ]}
              >
                <Input placeholder="Ingresa el saldo" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default Add_client;
