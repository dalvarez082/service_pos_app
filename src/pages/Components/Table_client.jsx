import React from "react";
import { Space, Table, Button, Popconfirm, notification, Tooltip } from "antd";
import { Delete, EditNote } from "@mui/icons-material";
import axios from "axios";
import Cookies from 'cookies-js';
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Table_info = (props) => {
  const { load_client, toggleDrawer, show_data_client, actionClient, data } =
    props;

  const delete_client = (id) => {
    const token = Cookies.get('token');
    axios
      .delete(`http://localhost:3001/client/${id}` , {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }   )
      .then((res) => {
        console.log("eliminado existoso");
        notification.success({
          message: <strong>Cliente eliminado exitosamente</strong>,
          placement: "top",
          duration: 3,
          icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
          closeIcon: null,
        });
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
      dataIndex: "cc_client",
      key: "cc_client",
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Alias",
      dataIndex: "alias_client",
      key: "alias_client",
    },
    {
      title: "Barrio",
      dataIndex: "barrio",
      key: "barrio",
    },
    {
      title: "Dirección",
      dataIndex: "direccion",
      key: "direccion",
    },
    {
      title: "Telefono",
      dataIndex: "telefono",
      key: "telefono",
    },
    {
      title: "Saldo",
      dataIndex: "saldo",
      key: "saldo",
    },
    {
      title: "Fecha nacimiento",
      dataIndex: "fecha",
      key: "fecha",
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
                console.log(record)
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
              onConfirm={() => delete_client(record.cc_client)}
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
