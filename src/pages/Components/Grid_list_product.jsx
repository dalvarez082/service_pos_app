/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip, Popconfirm } from "antd";
import { Delete, EditNote, ErrorOutline } from "@mui/icons-material";
import Add_product from "./Add_product";
import Cookies from "cookies-js";
import axios from "axios";

const Grid_list_product = ({ items, load_product }) => {
  

 

  const delete_product = async (id_product) => {
   
   
    const token = Cookies.get("token");
    try {
      const res = await axios.delete(
        `http://localhost:3001/product/${id_product}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      load_product();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "black",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "16px",
          paddingBottom: "100px",
          maxHeight: "400px",
          overflowY: "scroll",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            
            style={{ cursor: "pointer" }}
          >
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              title={item.nombre}
              extra={[
                <div key="clear" style={{ marginLeft: "auto" }}>
                  <Tooltip title="Eliminar" color="red" key="eliminar">
                    <Popconfirm
                      title={
                        <strong style={{ fontSize: "18px" }}>
                          Confirmación
                        </strong>
                      }
                      description={
                        <strong>
                          ¿Está seguro que quiere eliminar este producto?
                        </strong>
                      }
                      onConfirm={() => delete_product(item.id_product)}
                      okText="Yes"
                      cancelText="No"
                      icon={
                        <ErrorOutline
                          style={{ color: "#FFD700", fontSize: "30px" }}
                        />
                      }
                    >
                      <Button type="text" icon={<Delete />} />
                    </Popconfirm>
                  </Tooltip>
                </div>,
              ]}
              description={item.description}
              actions={[
                <Tooltip title="Editar" color="cyan" key="edit">
                  <Button
                    type="primary"
                    onClick={console.log("")}
                    icon={<EditNote />}
                  />
                </Tooltip>,
              ]}
            >
              <img 
              alt="example" 
              src={item.imagen}
              style={{ width: "250px", height: "250px" }}
               />
              <div style={{ marginTop: "8px" }}>{item.precio}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_list_product;
