import React, { useState } from "react";
import { Button, Drawer, Badge, Space } from "antd";
import { ShoppingCart } from "@mui/icons-material";

const Add_shopping = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCart style={{ paddingLeft: "2px" }} />
          </div>
        }
        style={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor:"#4CAF50",

        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      ></Button>
      <Badge count={5} color="#00FF00" offset={[40, -60]}></Badge>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Add_shopping;
