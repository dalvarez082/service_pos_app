/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip  } from "antd";
import {  Add } from "@mui/icons-material";

const Grid_sale_product = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item.title);
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
              }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              title={item.nombre}
              
              description={item.description}
              actions={[
                <Tooltip title="Añadir " color="green" key="edit">
                  <Button type="primary"  icon={<Add />} style={{background:"green"}} />
                </Tooltip>,
              ]}
            >
              <img alt="example" src={item.image} />
              <div style={{ marginTop: "8px" }}>{item.precio}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_sale_product;
