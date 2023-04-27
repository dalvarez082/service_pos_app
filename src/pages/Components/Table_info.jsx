import React from "react";
import { Space, Table, Button, Tooltip, Popconfirm, message } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const Table_info = (props) => {
  const { load_client, toggleDrawer, show_data_client, actionClient, data } =
    props;

  const delete_client = (id) => {
    axios
      .delete(`http://localhost:3001/client/${id}`)
      .then((res) => {
        console.log("eliminado existoso");
        message.info('eliminado existoso');
        load_client()
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    load_client();
  },[]);

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

  return <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />;
};

export default Table_info;
