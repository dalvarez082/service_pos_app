import React from 'react';
import { Card, Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import Cookies from 'cookies-js';
import {  LockOutlined, MailOutlined } from '@ant-design/icons';
import { ErrorOutlineOutlined} from '@mui/icons-material';
import jwt from 'jsonwebtoken';
import { SECRET } from '@/constants';

const Login = () => {
const [form] = Form.useForm();

  const onFinish = (values) => {
    handleLogin(values);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const data = response.data;
      const username = form.getFieldValue('username');
      const password = form.getFieldValue('password');
      const found = data.find((user) => {
        return user.name === username && user.password === password;
      });

      if (found) {
        console.log("inicio de sesion")
        const user_log =  {
          id: found.id,
          name: found.name,
        };
       
        console.log(user_log)
        const token = jwt.sign(user_log, SECRET);
        console.log("login: ",token)
        Cookies.set('token', token);
        window.location.href =('/Dashboard');
      } 

      else {
        notification.error({
          message: <strong>Error: inicio de sesión</strong>,
          description: 'Lo siento, verifica de nuevo tus datos.',
          placement: 'top',
          duration: 4,
          icon: <ErrorOutlineOutlined style={{ color: 'red' }}/>,
          closeIcon: null
        });
      }
    }
    catch (error) {
      console.error(error);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card
        title="Inicio de sesión"
        style={{
          width: '35%',
          borderRadius: '10px',
          textAlign: 'center',
          height: "45vh",
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#EDEDED',
          fontFamily: 'Poppins, sans-serif',
          
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          border: 'none',
        }}
      >
        <Form
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Por favor ingresa el nombre' },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ fontSize: '20px', color: '#08c' }} />}
              placeholder="Username"
              style={{ width: '330px' , marginTop: '25px' }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Por favor ingresa la contraseña' },
            ]}
          >
            <Input.Password            
              prefix={<LockOutlined style={{ fontSize: '20px', color: '#08c' }} />}
              placeholder="Password"
              style={{ width: '330px' ,marginTop: '10px' }}
            />
          </Form.Item>

          <Form.Item >
            
            <Button 

                type="primary"
                htmlType="submit"
                style={{
                    width: '50%',
                    textAlign: 'center',
                    
              }}
            >
              Inicio de sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;




