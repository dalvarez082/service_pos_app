import React, {useEffect} from "react";
import { Card, FloatButton } from "antd";
import { colors } from "@mui/material";
import Grid_sale_product from "./Components/Grid_sale_product";
import { ShoppingCart } from "@mui/icons-material";
import Add_shopping from "./Components/Add_shopping";
import Cookies from "cookies-js";


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
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <di
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
            backgroundColor: "#F5F5F5",
          }}
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between", ahora lo uso
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Add_shopping></Add_shopping>
          </div>
        </Card>
      </di>


      <div style={{ flex: "1 1 auto", margin: "5px" }}>
        <Card style={{ height: "100%" }}>
        <Grid_sale_product items={items} />
       

        </Card>
      </div>


    </div>
  );
};

export default List_sale;
