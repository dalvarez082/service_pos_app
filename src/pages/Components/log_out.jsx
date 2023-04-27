import { useState, useEffect } from 'react';
import { Dropdown, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const Log_out = () => {
  const [username, setUsername] = useState('');



  useEffect(() => {
    const token = Cookies.get('token');
    console.log("log:", token);
    if (token) {  
      const decodedToken = jwt_decode(token);
      const username = decodedToken.name;
      console.log("u: ",username),
      setUsername(username)
    }
  }, []);

  const handleLogout = () => {
    Cookies.set('token', '', { expires: new Date(0) });
    window.location.href = '/Login';
  };

  const items = [
    {
      key: '1',
      label: <div>{username}</div>,
    },
    {
      key: '2',
      label: <Button type="text"  onClick={handleLogout}>Cerrar sesión</Button>,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Avatar size={40} icon={<UserOutlined />} />
      </Dropdown>
    </>
  );
};

export default Log_out;
