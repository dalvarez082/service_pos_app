import React from 'react';
import { Card } from 'antd';
import { colors } from "@mui/material";
import Grid_sale_product from './Components/Grid_sale_product';

const List_sale = () => {

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

        <Grid_sale_product items={items}/>


    </Card>




</>
);
  
};

export default List_sale;