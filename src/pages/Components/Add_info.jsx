import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
const { Option } = Select;


const Add_info = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
            <Button onClick={onClose} type="primary">
              Agregar
            </Button>
          </Space>
        }
      >
        
        <Form layout="vertical" hideRequiredMark  >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="id"
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
                label="Seudonombre"
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
                name="ndistrict"
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
                name="dateTime"
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
export default Add_info;