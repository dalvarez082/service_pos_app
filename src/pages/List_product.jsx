import React, {useEffect,useState} from "react";
import { Card } from "antd";
import { colors } from "@mui/material";
import Grid_list_product from "./Components/Grid_list_product";
import Cookies from "cookies-js";
import axios from "axios";

const List_product = () => {
  // const items = [
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Producto 1",
  //     precio: "43500",
  //     image:
  //       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },

  //   // Agrega más elementos según sea necesario
  // ];

  const [items , setItems] = useState([]);

  useEffect(()=>{
    load_product()
  },[])

  const load_product =async ()=>{
    const token = Cookies.get("token");
    try {

      const res = await axios.get("http://localhost:3001/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const products = res.data.map((product) => ({
        ...product,
        id: product.id_product,        
      }));   
      
      setItems(products)



      
    } catch (error) {
      console.log(error);
      
    }


  }




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
