/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip, Col, Row ,Popconfirm} from "antd";
import { Delete, EditNote ,ErrorOutline} from "@mui/icons-material";
import Edit_type_product from "./Edit_type_product";
import Cookies from "cookies-js";
import axios from "axios";

const Grid_type_product = ({ items , load_type_product }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const { Meta } = Card;


  const delete_type_product = async (id_type) => {
   
   
    const token = Cookies.get("token");
    try {
      const res = await axios.delete(
        `http://localhost:3001/typeProduct//${id_type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      load_type_product();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: "490px", maxHeight: "100vh", overflow: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "16px",
          paddingBottom: "100px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
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
                      title={<strong style={{ fontSize: "18px" }}>Confirmación</strong>}
                      description={
                        <strong>¿Esta seguro que quiere eliminar este producto?</strong>
                      }
                      onConfirm={() => delete_type_product(item.id_type)}
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
              actions={[
                <Tooltip title="Editar" color="cyan" key="edit">
                  <Edit_type_product></Edit_type_product>
                </Tooltip>,
              ]}
            >
              <div
                style={{
                  maxHeight: "150px",
                  maxWidth: "250px",
                  overflowY: "auto",
                  overflowX: "auto",

                }}
              >
                <Meta
                  description={item.descripcion}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_type_product;
