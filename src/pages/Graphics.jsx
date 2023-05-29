import React from "react";
import { Card, Col, Row, Statistic } from "antd";

const Graphics = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Card
        style={{
          height: "40%",
          margin: "5px",
          backgroundColor: "pink",
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
            <Statistic title="Clientes activos" value={2563} />
            <Statistic title="Ventas totales" value={34567} />
            <Statistic title="Tasa de conversión" value={8.7} suffix="%" />
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

      <Card
        style={{
          margin: "5px",
          height: "60%",
          backgroundColor: "cyan",
        }}
      ></Card>
    </div>
  );
};

export default Graphics;
