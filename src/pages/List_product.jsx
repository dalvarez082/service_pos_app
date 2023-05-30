import React, {useEffect,useState} from "react";
import { Card } from "antd";
import { colors } from "@mui/material";
import Grid_list_product from "./Components/Grid_list_product";
import Add_product from "./Components/Add_product";
import Cookies from "cookies-js";
import axios from "axios";

const List_product = () => {
  

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

      const products = res?.data.length >=1  && res.data.map((product) => ({
        ...product,
        id: product.id_product,        
      })) || [];   
      
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

          justifyContent: "flex-end",
        }}
      >
        <Card
          bordered={false}
          style={{ 
            height: "100%",
             backgroundColor: "#F5F5F5"
            
            }}
        >
           <Add_product></Add_product>
        </Card>
      </div>

        <Card style={{
            height:"75%",
            margin: "5px"
        }}>

            <Grid_list_product items={items} load_product={load_product}/>


        </Card>
      </div>
   
  );
};

export default List_product;
