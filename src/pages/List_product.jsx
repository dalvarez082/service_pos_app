import React from "react";
import { Card } from "antd";
import { colors } from "@mui/material";
import Grid_list_product from "./Components/Grid_list_product";

const List_product = () => {
  const items = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      id: 1,
      nombre: "Producto 1",
      precio: "43500",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },

    // Agrega más elementos según sea necesario
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: "0 0 15%",
          backgroundColor: "#F5F5F5",
          marginBottom: "20px",
          margin: "5px",
        }}
      >
        <Card
          bordered={false}
          style={{ 
            height: "100%",
             backgroundColor: "#F5F5F5"
            
            }}
        ></Card>
      </div>

      <div style={{ flex: "1 1 auto", margin: "5px" }}>
        <Card style={{ height: "100%" }}>
        <Grid_list_product items={items}/>


        </Card>
      </div>
    </div>
  );
};

export default List_product;
