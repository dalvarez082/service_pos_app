import React from "react";
import { Breadcrumb, Layout } from "antd";
import Sale_sale from "./Sale_sale";
import List_sale from "./List_sale";

const Sale = () => {
  const [currentPage, setCurrentPage] = React.useState("Sale");

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
      <div style={{ height: "5%", marginBottom: "7px" }}>
        <Breadcrumb>
          <Breadcrumb.Item
            key="Sale_sale"
            onClick={() => handleBreadcrumbClick("Sale_sale")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          >
            Vender
          </Breadcrumb.Item>
          <Breadcrumb.Item
            key="List_sale"
            onClick={() => handleBreadcrumbClick("List_sale")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          >
            Listado de ventas
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Layout style={{ height: "95%", borderRadius: "10px" }}>
        {currentPage === "Sale_sale" && <Sale_sale />}
        {currentPage === "List_sale" && <List_sale />}
      </Layout>
    </>
  );
};

export default Sale;
