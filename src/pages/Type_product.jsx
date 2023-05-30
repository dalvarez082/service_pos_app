import React , {useEffect,useState} from "react";
import { Card } from 'antd';
import { colors } from "@mui/material";
import Grid_type_product from "./Components/Grid_type_product";
import Cookies from "cookies-js";
import axios from "axios";


const Type_product = () => {
 
  // const items = [
  //   { id: 1, nombre: "tipo 1", description: " Las pipetas son instrumentos de laboratorio utilizados para medir y transferir volúmenes precisos de líquidos. Son herramientas esenciales en diversos campos, como la química, la biología, la medicina y la investigación científica en general."},
  //   { id: 1, nombre: "tipo 1", description: "Las pipetas son instrumentos de laboratorio utilizados para medir y transferir volúmenes precisos de líquidos. Son herramientas esenciales en diversos campos, como la química, la biología, la medicina y la investigación científica en general."},
  //   { id: 1, nombre: "tipo 1", description: "fhdggdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"},

    
  //   // Agrega más elementos según sea necesario
  // ];

  const [items , setItems] = useState([]);

  useEffect(()=>{
    load_type_product()
  },[])



  const load_type_product =async ()=>{
    const token = Cookies.get("token");
    try {

      const res = await axios.get("http://localhost:3001/typeProduct", {
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
<div  style={{backgroundColor:"white"}}>

    <Card bordered={false} style={{
        height : "15%",
        backgroundColor: "#F5F5F5",
        marginBottom: "20px",
        margin: "5px",
    }}>
        
    </Card >

    <Card style={{
        height:"70%",
        margin: "5px",
        
    }}>

        <Grid_type_product items={items} load_type_product = {load_type_product}/>


    </Card>




</div>
);
};

export default Type_product;