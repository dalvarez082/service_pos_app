import React from "react";
import { Card, FloatButton } from "antd";
import { colors } from "@mui/material";
import Grid_sale_product from "./Components/Grid_sale_product";
import { ShoppingCart } from "@mui/icons-material";
import Add_product from "./Components/Add_product";

const List_sale = () => {
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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Card
      style={{
        height: '10%',
        background: 'red',
      }}
    >

      <Add_product>

      </Add_product>




    </Card>

    <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
      

      <Card style={{ height: '98%' , width: "100%" }}>
        <Grid_sale_product items={items} />
      </Card>

      
    </div>
  </div>
  );
};

export default List_sale;
