import { useState, useEffect } from 'react';
import { Dropdown, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Log_out = () => {
const [username, setUsername] = useState('');
const [firstLetterUser, setFirstLetterUser] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    console.log("log:", token);
    if (token) {  
      const decodedToken = jwt_decode(token);
      const username = decodedToken.name;
      console.log("u: ",username),
      setUsername(username)
      const primerLetra = username.charAt(0);
      setFirstLetterUser(primerLetra)
    }
  }, []);

  const handleLogout = () => {
    Cookies.set('token', '', { expires: new Date(0) });
    window.location.href = '/Login';
  };

  const items = [
    {
      key: '1',
      label: <Button type="text" onClick={handleLogout}  icon={<PowerSettingsNewIcon  style={{fontSize:'15px', margin: '4px', color:'#B30000'}}/>}  style={{border: '1px solid #d9d9d9', borderRadius:'4px',display: 'flex', alignItems:'center', justifyContent:'center' }} >Cerrar sesión</Button>,
    },
  ];

  return (
    <>
    <div style={{ display: 'flex'}}>
    <div style={{ marginRight: '10px' }}> <strong>Hola {username}!</strong> </div>

      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Avatar size={43} style={{ backgroundColor: '#2e6da4', marginTop:'10px' }}>{firstLetterUser}</Avatar>
      </Dropdown></div>
    </>
  );
};

export default Log_out;
