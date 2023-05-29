import React from "react";
import { Breadcrumb, Layout } from "antd";
import List_product from "./List_product";
import Type_product from "./Type_product";

const Product = () => {
  const [currentPage, setCurrentPage] = React.useState("List_product");

  const handleBreadcrumbClick = (page) => {
    setCurrentPage(page);
  };


  const handleMouseEnter = (e) => {
    e.target.style.cursor = 'pointer';
    e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
    e.target.style.padding = '3px';
    e.target.style.borderRadius = '5px';
  };

  const handleMouseLeave = (e) => {
    e.target.style.cursor = 'default';
    e.target.style.boxShadow = 'none';
  };

  return (
    <>
      <div style={{ height: "5%"  }}>
        <Breadcrumb>
          <Breadcrumb.Item
            key="List_product"
            onClick={() => handleBreadcrumbClick("List_product")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Lista productos
          </Breadcrumb.Item>
          <Breadcrumb.Item
            key="Type_product"
            onClick={() => handleBreadcrumbClick("Type_product")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
