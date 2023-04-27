import React from "react";
import { Col, Row, Drawer, Card, Space } from "antd";
import { colors } from "@mui/material";

const Add_sale = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Realizar una nueva venta"
      style={{
        height: "90%",
      }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Card>
  </Space>
);

export default Add_sale;
