import { SpaceDashboard, Person,Store,ShoppingCart} from '@mui/icons-material';


import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState('Dashboard');
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
                label: 'Dashboard',  
                onClick: () => setCurrentPage('Graphics'),              
            },{
                key: 'Clientes',
                icon: React.createElement(Person),
                label: 'Clientes',
                onClick: () => setCurrentPage('Client')
            },{
                key: 'Ventas',
                icon: React.createElement(Store),
                label: 'Ventas',
                onClick: () => setCurrentPage('Sale')
            },{
                key: 'Proveedores',
                icon: React.createElement(ShoppingCart),
                label: 'Proveedores',
                onClick: () => setCurrentPage('Providers')
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
          <div className='pages'
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              height: '98%'
              
            }}
          >

              {currentPage === 'Dashboard' && <div>Dashboard content here</div>}
              {currentPage === 'Clientes' && <div>Clientes content here</div>}
              {currentPage === 'Ventas' && <div>Ventas content here</div>}
              {currentPage === 'Proveedores' && <div>Proveedores content here</div>}
            
          </div>
        </Content>        
      </Layout>
    </Layout>
  );
};
export default Dashboard;