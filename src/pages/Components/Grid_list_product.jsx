/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card, Button, Tooltip } from "antd";
import { Delete, EditNote } from "@mui/icons-material";

const Grid_list_product = ({ items }) => {
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
                  <Button type="text" icon={<Delete />} />
                  </Tooltip>
                  
                </div>,
              ]}
              description={item.description}
              actions={[
                <Tooltip title="Editar" color="cyan" key="edit">
                  <Button type="primary" icon={<EditNote />}  />
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

export default Grid_list_product;