import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
import React, { useRef , useEffect} from 'react';
import axios from 'axios';


const Add_info = (props) => { 
  const { refresh_client } = props;
 

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  


  const formRef = useRef(null);



  
  const add_client = () => {
    const form = formRef.current;
    form.validateFields().then(values => {  
      const newClient = {
        "cc": values.key,
        "name": values.name,
        "alias": values.alias,
        "birth_date": values.birth_date.format('YYYY-MM-DD'),
        "district": values.district,
        "address": values.address,
        "balance": 0    
      };

      const url = "http://localhost:3001/client";
      axios.post(url,newClient)
        .then(res => {
          console.log("Cliente agregado exitosamente");
          form.resetFields();
          console.log(newClient);
          onClose();
          refresh_client(); 
        })
        .catch(error => {
          console.log("Ha ocurrido un error al agregar el cliente:", error);
        });
    });
  };

  return (
    <>

      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Agregar cliente
      </Button>
   
      <Drawer style={{ borderRadius: '20px'}}
        title="Agregar cliente nuevo"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="primary" onClick={add_client}>
              Agregar
            </Button>
          </Space>
        }
      >
        
        <Form layout="vertical" hideRequiredMark 
         initialValues={{ remember: true }}
         ref={formRef}
         >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="key"
                label="C.C"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresa número de cédula',
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: 'Por favor ingresa solo números',
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
                    message: 'Por favor ingresa el nombre',
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
                    message: 'Por favor ingresa el seudonombre',
                  },
                ]}
              >
                <Input placeholder="Ingresa el seudonombre"/>

              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Dirección"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresa la dirección',
                  },
                  {
                    pattern: /^[A-Za-z0-9\s]+$/,
                    message: 'Por favor ingresa una dirección válida',
                  },
                ]}
              >
                <Input placeholder="Ingresa la dirección"/>

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
                    message: 'Por favor ingresa el barrio',
                  },
                ]}
              >
                <Input placeholder="Ingresa el barrio"/>

              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birth_date"
                label="Fecha de nacimiento"
                rules={[
                  {
                    required: true,
                    message: 'Por favor escoje la fecha de nacimiento',
                  },
                ]}
              >
                <DatePicker 
                  style={{
                    width: '100%',
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
                    message: 'Por favor ingresa el saldo',
                  },
                  {
                    pattern: /^[0-9]+(\.[0-9]{1,3})?$/,
                    message: 'Por favor ingresa solo números',
                  },
                ]}
              >
                <Input placeholder="Ingresa el saldo"/>

              </Form.Item>
            </Col>
          </Row>
        </Form>
        
      </Drawer>
     
    </> 
   
  );
};
export default Add_info;