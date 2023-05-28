import React from "react";
import { Space, Table, Button, Popconfirm, notification, Tooltip } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import Cookies from 'cookies-js';
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";


const Table_sales = (props) => {
 

  const columns = [
    {
      title: "Código",
      dataIndex: "id_sale",
      key: "id_sale",
    },
    {
      title: "CC cliente",
      dataIndex: "cc_client",
      key: "cc_client",
    },
    {
        title: "Fecha",
        dataIndex: "fecha",
        key: "fecha",
      },
    {
      title: "Estado",
      dataIndex: "Estado",
      key: "Estado",
    },
  
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Editar" color={'cyan'}>
            <Button
              type="primary"
              icon={<EditNote />}
            //   onClick={() => {
            //     show_data_client(record);
            //     console.log(record)
            //   }}
            />
          </Tooltip>

          <Tooltip title="Eliminar" color={'red'}>
            <Popconfirm
              placement="topRight"
              title={<strong style={{ fontSize: "18px" }}>Confirmación</strong>}
              description={
                <strong>¿Esta seguro que quiere eliminar esta venta?</strong>
              }
            //   onConfirm={() => delete_client(record.cc_client)}
            //   okText="Si"
            //   cancelText="No"
            //   icon={
            //     <ErrorOutlineIcon
            //       style={{ color: "#FFD700", fontSize: "30px" }}
            //     />
            //   }
            >
              <Button type="danger" icon={<Delete />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return <Table  columns={columns}scroll={{ y: 290 }} />;
  
};

export default Table_sales;
