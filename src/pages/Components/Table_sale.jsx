import React from "react";
import { Space, Table, Button, Tooltip, Popconfirm, message } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const Table_sale = () => {
  

  const dataSource = [
    {
      "cc": "8595474",
      "name": "Isabela ",
      "alias": "Matias",
      "birth_date": "2023-04-17",
      "district": "belen",
      "address": "4 piso",
      "balance": 0,
      "id": 22
    },
    {
      "cc": "8595474",
      "name": "Isabela ",
      "alias": "Matias",
      "birth_date": "2023-04-17",
      "district": "belen",
      "address": "4 piso",
      "balance": 0,
      "id": 22
    },
    {
      "cc": "8595474",
      "name": "Isabela ",
      "alias": "Matias",
      "birth_date": "2023-04-17",
      "district": "belen",
      "address": "4 piso",
      "balance": 0,
      "id": 22
    },{
      "cc": "8595474",
      "name": "Isabela ",
      "alias": "Matias",
      "birth_date": "2023-04-17",
      "district": "belen",
      "address": "4 piso",
      "balance": 0,
      "id": 22
    }
  ];

  const columns = [
    {
      title: "CC",
      dataIndex: "cc",
      key: "cc",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Alias",
      dataIndex: "alias",
      key: "alias",
    },
    {
      title: "Barrio",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Saldo",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Fecha nacimiento",
      dataIndex: "birth_date",
      key: "birth_date",
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Editar">
            <Button
              type="primary"
              icon={<EditNote />}
              onClick={() => {
                show_data_client(record);
              }}
            />
          </Tooltip>

          <Tooltip title="Eliminar">
            <Popconfirm
              placement="topRight"
              title={"Confirmacion"}
              description={"Esta seguro que quiere elimar este cliente"}
              onConfirm={() => delete_client(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="danger"
                icon={<Delete />}                
              />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} scroll={{ y: 240 }} />;
};

export default Table_sale;
