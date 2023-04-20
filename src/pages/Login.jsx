import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import db from '../';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const router = useRouter();

  const handleLogin = () => {
    console.log('Logged in!');
    router.push('./Components/Dashboard');
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
          width: '30%',
          borderRadius: '10px',
          textAlign: 'center',
          height: "40vh",
        }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please input your username!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}
          >
            <Input.Password            
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item style={{ marginTop: '20px' }}>
            
            <Button 
                onClick={handleLogin}
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

export default Login;

