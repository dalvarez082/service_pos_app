import React from "react";
import { Card } from 'antd';
import { colors } from "@mui/material";
import Grid_list_product from "./Components/Grid_list_product";



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
    <>

        <Card style={{
            height : "10%",
            background : "red"
        }}>
            
        </Card >

        <Card style={{
            height:"90%",
            
        }}>

            <Grid_list_product items={items}/>


        </Card>



    
    </>
  );
};

export default List_product;