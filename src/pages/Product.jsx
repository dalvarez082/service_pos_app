import React from "react";
import { Breadcrumb, Layout } from "antd";
import List_product from "./List_product";
import Type_product from "./Type_product";

const Product = () => {
  const [currentPage, setCurrentPage] = React.useState("List_product");

  const handleBreadcrumbClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div style={{ height: "5%" }}>
        <Breadcrumb>
          <Breadcrumb.Item
            key="List_product"
            onClick={() => handleBreadcrumbClick("List_product")}
          >
            Lista productos
          </Breadcrumb.Item>
          <Breadcrumb.Item
            key="Type_product"
            onClick={() => handleBreadcrumbClick("Type_product")}
          >
            Tipo productos
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Layout style={{ height: "95%", borderRadius: "10px" }}>
        {currentPage === "List_product" && <List_product />}
        {currentPage === "Type_product" && <Type_product />}
      </Layout>
    </>
  );
};

export default Product;
