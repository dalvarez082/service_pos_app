import React, { useState } from "react";
import { Button, Drawer, Badge, Space } from "antd";
import { ShoppingCart } from "@mui/icons-material";

const Add_product = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<ShoppingCart />}>
        <Space size="middle">
          <Badge 
          count={5} 
          color="green"
          offset={[20, -35]}
         
          >

          </Badge>
        </Space>
      </Button>
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

export default Add_product;
