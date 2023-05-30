import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import { useEffect, useState } from "react";

const ContainerHeight = 270;

const List_sale_product = ({ data }) => {
  const onScroll = (e) => {
    e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight;
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id_product"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.id_product}>
            <List.Item.Meta
              avatar={<Avatar src={item.imagen} />}
              title={<a href="https://ant.design">{item.nombre}</a>}
              description={item.precio}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default List_sale_product;
