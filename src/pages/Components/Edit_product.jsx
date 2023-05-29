import React, { useState } from "react";
import { Button, Modal, Tooltip } from "antd";
import { Delete, EditNote } from "@mui/icons-material";

const Edit_product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Editar" color="cyan" key="edit">
        <Button type="primary" onClick={showModal} icon={<EditNote />} />
      </Tooltip>
      <Modal
        title="Basic Modal"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Edit_product;
