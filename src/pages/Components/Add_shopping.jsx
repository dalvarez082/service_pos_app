import React, { useState } from "react";
import { Button, Drawer, Badge, Space, Form, Card, Select,TextArea,Input,Radio,InputNumber } from "antd";
import { ShoppingCart, PlaylistRemove } from "@mui/icons-material";
import List_sale_product from "./List_sale_product";





const Add_shopping = ({count,data}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  ///////////////////
  //seleccionador

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  ///////////////////////7///
  //Descripcion 

  const { TextArea } = Input;
  const onChange2 = (e) => {
    console.log('Change:', e.target.value);
  };


  //////////////////////////////////
  /// Radio grup 

  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
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
            backgroundColor: "#4CAF50",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></Button>
        <Badge count={count} color="#00FF00" offset={[40, -60]}></Badge>
      </div>
      <Drawer
        title="Orden en curso "
        placement="right"
        onClose={onClose}
        open={open}
        extra={[<Button key="clear_list" icon={<PlaylistRemove />}></Button>]}
      >
        <Form
          name="form sale"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <List_sale_product data={data}></List_sale_product>

          <Card
            style={{
             
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Cliente</h3>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "1",
                  label: "Diego alvarez",
                },
                {
                  value: "2",
                  label: "Camila sierra",
                },
              ]}
            />

<h3>Descripción</h3>

<TextArea
      showCount
      maxLength={150}
      style={{
        height: 80,
        resize: 'none',
      }}
      onChange={onChange2}
      placeholder="Ingrese la descripción del la venta "
    />

<h3>Tipo de compra  </h3>

<Radio.Group defaultValue="true" buttonStyle="solid">
      <Radio.Button value="true" onClick={toggle}>Contado</Radio.Button>
      <Radio.Button value="false" onClick={toggle}>Fiado</Radio.Button>
      
    </Radio.Group>


    <h3>Abono  </h3>

    <InputNumber min={1}  disabled={disabled} defaultValue={0} style={{width :"100%"}}/>


    














          </Card>

          <div style={{display: 'grid', placeItems: 'center', }}>
          <Space wrap style={{marginTop:"5px"}}>
    <Button type="default ">Cancelar</Button>
    <Button type="primary">Confirmar compra</Button>
    </Space>


          </div>

          
        </Form>
      </Drawer>
    </>
  );
};

export default Add_shopping;
