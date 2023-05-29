import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons";

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
            <Card title="Estadística cliente" bordered={false}>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Statistic title="Clientes activos" value={2563} />
                </Col>
                <Col span={12}>
                  <Statistic title="Ventas totales" value={34567} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Actividad" bordered={false}>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Statistic
                    title="Activo"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Inactivo"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                      color: "#cf1322",
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Interacción" bordered={false}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic
                    title="Reación"
                    value={1128}
                    prefix={<LikeOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Statistic title="No fusionado" value={93} suffix="/ 100" />
                </Col>
              </Row>
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
