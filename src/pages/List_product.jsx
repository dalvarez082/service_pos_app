import React from "react";
import { Card } from 'antd';
import { colors } from "@mui/material";
import Grid_list_product from "./Components/Grid_list_product";
import Add_product from "./Components/Add_product";



const List_product = () => {

    const items = [
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        { id: 1, nombre: "Producto 1", precio: "43500" ,  image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
        
        // Agrega más elementos según sea necesario
      ];

  return (
    <div  style={{backgroundColor:"white"}}>

        <Card bordered={false} style={{
            height : "15%",
            backgroundColor: "#F5F5F5",
            marginBottom: "20px",
            margin: "5px"
        }}>
                    <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >

            <Add_product></Add_product>

            </div>
           


        </Card >

        <Card style={{
            height:"75%",
            margin: "5px"
        }}>

            <Grid_list_product items={items}/>


        </Card>



    
  </div>
  );
};

export default List_product;