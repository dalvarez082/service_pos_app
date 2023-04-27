import React from "react";
import { Space, Table, Button, Popconfirm, notification, Tooltip } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Table_info = (props) => {
  const { load_client, toggleDrawer, show_data_client, actionClient, data } =
    props;

  const delete_client = (id) => {
    axios
      .delete(`http://localhost:3001/client/${id}`)
      .then((res) => {
        console.log("eliminado existoso");
        notification.success({
          message: <strong>Cliente eliminado exitosamente</strong>,
          placement: "top",
          duration: 3,
          icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
          closeIcon: null,
        });
        load_client().then((clients) => setData(clients));
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
          <Tooltip title="Editar" color={'cyan'}>
            <Button
              type="primary"
              icon={<EditNote />}
              onClick={() => {
                show_data_client(record);
              }}
            />
          </Tooltip>

          <Tooltip title="Eliminar" color={'red'}>
            <Popconfirm
              placement="topRight"
              title={<strong style={{ fontSize: "18px" }}>Confirmación</strong>}
              description={
                <strong>¿Esta seguro que quiere eliminar este cliente?</strong>
              }
              onConfirm={() => delete_client(record.id)}
              okText="Si"
              cancelText="No"
              icon={
                <ErrorOutlineIcon
                  style={{ color: "#FFD700", fontSize: "30px" }}
                />
              }
            >
              <Button type="danger" icon={<Delete />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} scroll={{ y: 290 }} />;
};

export default Table_info;
