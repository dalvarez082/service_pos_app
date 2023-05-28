import React from "react";
import Table_sales from "./Components/Table_sales";
import Search_sale from "./Components/Search_sale";
import { useState} from "react";
import axios from "axios";
import Cookies from 'cookies-js';
import { Form } from "antd";
import { Card } from "antd";


const Table_sale = () => {

  

  return (
    <div 
    style={{
        height: "100%",
        backgroundColor: "white",
      }}>
      <Card
        style={{
          height: "20%",
          margin: "5px"
        }}>
            <Search_sale style={{}}></Search_sale>
      </Card>

      <Card
        style={{
            margin: "5px",
            height : '75%'
        }}>
            
            <Table_sales style={{height:'100%'}}/>
        </Card>
    </div>
  );
};

export default Table_sale;
