import { SpaceDashboard, Person, Store, ShoppingCart,  } from '@mui/icons-material';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import Client from './Client';
import Graphics from './Graphics';
import Providers from './Providers';
import Sale from './Sales';



const { Header, Content,  Sider } = Layout;

const Dashboard = () => {

  const [currentPage, setCurrentPage] = React.useState('Dashboard');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <Layout style={{ height: '100vh' }}>
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
              label: 'Dashboard',
              onClick: () => handleMenuClick('Dashboard')
            },
            {
              key: 'Clientes',
              icon: React.createElement(Person),
              label: 'Clientes',
              onClick: () => handleMenuClick('Clientes')
            },
            {
              key: 'Ventas',
              icon: React.createElement(Store),
              label: 'Ventas',
              onClick: () => handleMenuClick('Ventas')
            },
            {
              key: 'Proveedores',
              icon: React.createElement(ShoppingCart),
              label: 'Proveedores',
              onClick: () => handleMenuClick('Proveedores')
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
              height: '98%', 
              borderRadius : '10px'            
            }}
          >
            {currentPage === 'Dashboard' && <Graphics />}
            {currentPage === 'Clientes' && <Client />}
            {currentPage === 'Ventas' && <Sale />}
            {currentPage === 'Proveedores' && <Providers />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
