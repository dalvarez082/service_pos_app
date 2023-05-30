import React, { useEffect, useState } from "react";
import Cookies from "cookies-js";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
  notification

} from "antd";

const Add_product = ({load_product}) => {
  //////////////////////////////////(      MODAL      )////////////////////////////////////////

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [option, setOption] = useState(false);
  const [urlImg, setUrl] = useState("");


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
        console.log(values)
        add_product(values);
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

  useEffect(() => {
    load_type_product();
  }, []);

  const load_type_product = async () => {
    const token = Cookies.get("token");
    try {
      const res = await axios.get("http://localhost:3001/typeProduct", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const type_products = res.data.map((item) => ({
        value: item.id_type,
        label: item.nombre,
      }));

      setOption(type_products);
    } catch (error) {
      console.log(error);
    }
  };


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

  const beforeUpload  = async (file) => {
    const cloudName="drrbzxlpc"
    console.log("file: ",file);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "k94bnc56");

    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const request = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    const data = await request.json();
    setUrl(data.secure_url)
    





  }



  //////////////////////////////////(      AÑADIR PRODUCTO      )////////////////////////////////////////


  const add_product = (values) => {
    const form = formRef.current;
      const newProduct = {

        id_type: values.tipo,
        cc_user : "12345",
        nombre: values.nombre, 
        precio: +values.precio,
        imagen:urlImg,
        descripcion: values.descripcion       
      };
      const token = Cookies.get('token');
      const url = "http://localhost:3001/product";
      console.log(newProduct)      
      axios
        .post(url, newProduct, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then((res) => {
          console.log("Producto agregado exitosamente");
          notification.success({
            message: <strong>Producto agregado exitosamente</strong>,
            placement: "top",
            duration: 3,
            icon: <CheckCircleOutlineIcon style={{ color: "green" }} />,
            closeIcon: null,
          });
          form.resetFields();
          load_product();
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al agregar el producto:", error);
        });

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
                    beforeUpload={beforeUpload}
                  >
                    {fileList.length < 1 && "+ Subir"}
                  </Upload>
                </ImgCrop>
              </Form.Item>
              <Form.Item label=" Tipo y nombre">
                <Space.Compact>
                  <Form.Item
                    name="tipo"
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
                      options={option}
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
                    name="nombre"
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
