/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip } from "antd";
import { Add } from "@mui/icons-material";

const Grid_sale_product = ({ items , addProduct }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    
    addProduct(item)
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
            <Tooltip title="Añadir al carrito" color="#4CAF50" key="edit">
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  transition: "transform 0.3s",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                title={item.nombre}
                description={item.description}
                actions={[
                  <Tooltip title="Añadir" color="green" key="edit">
                    <Button
                      type="primary"
                      icon={<Add />}
                      style={{ background: "green" }}
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
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_sale_product;
