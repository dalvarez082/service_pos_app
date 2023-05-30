import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Row,
  Col,
  Select,
  Space,
  Upload,

} from "antd";

const Add_product = () => {
  //////////////////////////////////(      MODAL      )////////////////////////////////////////

  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = React.useRef();
  const uploadRef = React.useRef();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const form = formRef.current;
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log("Error en el formulario:", error);
      });
  };

  const handleCancel = () => {
    const form = formRef.current;
    form.resetFields();
    setFileList([])

    setIsModalOpen(false);
  };

  //////////////////////////////////(      SELECTOR      )////////////////////////////////////////

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "camila",
      label: "camila",
    },
  ];

  const { TextArea } = Input;

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  //////////////////////////////////(      IMAGEN      )////////////////////////////////////////

  const [fileList, setFileList] = useState([]);

  const onChangeImg = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <Modal
        title="Agregar producto"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Aceptar"
        cancelText="Cancelar"
      >
        <Form layout="vertical" hideRequiredMark ref={formRef} /* form={form}*/>
        
        <Form.Item name="image" label="Imagen">
                <ImgCrop rotationSlider>
                  <Upload
                    maxCount={1}
                    listType="picture-card"
                    fileList={fileList}
                    ref={uploadRef}
                    onChange={onChangeImg}
                    onPreview={onPreview}
                  >
                    {fileList.length < 1 && "+ Subir"}
                  </Upload>
                </ImgCrop>
              </Form.Item>
              <Form.Item label=" Tipo y nombre">
                <Space.Compact>
                  <Form.Item
                    name={["nombre", "tipo"]}
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Por favor selecciona un tipo",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="selecciona el tipo"
                      options={options}
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    ></Select>
                  </Form.Item>
                  <Form.Item
                    name={["nombre", "nombre"]}
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa un nombre",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Ingresa el nombre"
                    />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
       
   
              <Form.Item
                name="precio"
                label="Precio"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el precio",
                  },
                  {
                    pattern: /^[0-9]+(\.[0-9]{1,3})?$/,
                    message: "Por favor ingresa solo números",
                  },
                ]}
              >
                <Input placeholder="Ingresa el precio" />
              </Form.Item>
      

        
              <Form.Item
                name="descripcion"
                label="Descripcion"
                rules={[
                  {
                    required: true,
                    message: "Por favor una descripcion",
                  },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={150}
                  style={{
                    height: 100,
                    resize: "none",
                  }}
                  placeholder="Ingrese la descripción del producto "
                />
              </Form.Item>
           
      
        </Form>
      </Modal>
      <Button
        type="primary"
        onClick={showModal}
        icon={<AddIcon />}
        style={{
          fontSize: "16px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "5px" }}>Agregar producto</span>
      </Button>
    </>
  );
};

export default Add_product;
