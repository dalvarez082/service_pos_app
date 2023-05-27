import React from "react";
import { Col, Row, Drawer, Card, Space, List, Select,Button } from "antd";
import { colors } from "@mui/material";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
];

const Add_sale = () => {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%"
        
      }}
    >
      <Space direction="vertical" size={16}>
    <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />

<Select
    showSearch
    style={{
      width: "100%",
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
  </Space>

    <Button type="primary"
    style={{}}
    >
    
    Realizar venta
    
    </Button>




    </Card>
  );
};

export default Add_sale;
