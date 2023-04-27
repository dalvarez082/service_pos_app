import React from 'react';
import { Col, Row } from 'antd';
import Table_sale from './Components/Table_sale';
import Add_sale from './Components/Add_sale';

const Sale = () => {
  return (
    <Row gutter={[8]}>
     <Col span={16}>
      col-16
      <Table_sale></Table_sale>


      </Col>
      <Col span={8}>



         col-8
         <Add_sale></Add_sale>


      </Col>
  </Row>
  );
};

export default Sale;