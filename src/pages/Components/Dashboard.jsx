import { SpaceDashboard, Person,Store,ShoppingCart} from '@mui/icons-material';

import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{height:'100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.2)',
        }} />
        <Menu
          theme="dark"
          mode="inline"          
          items={[
            {
                key: 'Dashboard',
                icon: React.createElement(SpaceDashboard),
                label: 'Dashboard'
            },{
                key: 'Clientes',
                icon: React.createElement(Person),
                label: 'Clientes'
            },{
                key: 'Ventas',
                icon: React.createElement(Store),
                label: 'Ventas'
            },{
                key: 'Proveedores',
                icon: React.createElement(ShoppingCart),
                label: 'Proveedores'
            }
          ]} 
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              height: '98%'
              
            }}
          >
            content
          </div>
        </Content>        
      </Layout>
    </Layout>
  );
};
export default App;