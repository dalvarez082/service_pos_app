import {
  SpaceDashboard,
  Person,
  Store,
  PropaneTank,
  ShoppingCart,
} from "@mui/icons-material";
import { Layout, Menu, theme } from "antd";
import React from "react";
import Client from "./Client";
import Graphics from "./Graphics";
import Product from "./Product";
import Sale from "./Sales";
import Cookies from "cookies-js";
import { useEffect } from "react";
import Log_out from "./Components/log_out";
import Authorized from "./Components/authorized";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState("Dashboard");
  const [isUserValid, setIsUserValid] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("tokenq: ", token);
    if (token) {
      setIsUserValid(true);
    }
    setLoading(false)
  }, []);

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading ? <Spin></Spin>
      :
      isUserValid ? (
        <Layout style={{ height: "100vh" }}>
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
            <div
              className="logo"
              style={{
                height: "32px",
                margin: "16px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
            <Menu
              theme="dark"
              mode="inline"
              items={[
                {
                  key: "Dashboard",
                  icon: React.createElement(SpaceDashboard),
                  label: "Dashboard",
                  onClick: () => handleMenuClick("Dashboard"),
                },
                {
                  key: "Clientes",
                  icon: React.createElement(Person),
                  label: "Clientes",
                  onClick: () => handleMenuClick("Clientes"),
                },
                {

                  key: "Productos",
                  icon: React.createElement(PropaneTank),
                  label: "Productos",
                  onClick: () => handleMenuClick("Productos"),
                },
                {
                  key: "Ventas",
                  icon: React.createElement(Store),
                  label: "Ventas",
                  onClick: () => handleMenuClick("Ventas"),
                },
                
              ]}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div></div>
              <div style={{ marginRight: 28 }}>
                <Log_out />
              </div>
            </Header>

            <Content
              style={{
                margin: "24px 16px 0",
              }}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  height: "98%",
                  borderRadius: "10px",
                }}
              >
                {currentPage === "Dashboard" && <Graphics />}
                {currentPage === "Clientes" && <Client />}
                {currentPage === "Productos" && <Product />}
                {currentPage === "Ventas" && <Sale />}
                
              </div>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Authorized></Authorized>
      )}
    </>
  );
};

export default Dashboard;
