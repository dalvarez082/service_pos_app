import { AutoComplete, Input } from "antd";
import { useState } from "react";
import axios from "axios";

const Search_sale = (props) => {
    // const { search, reset } = props;
    // const [options, setOptions] = useState([]);
  
    // const searchData = (query) => {
    //   axios.get("http://localhost:3001/client").then((res) => {
  
    //     const filter = res.data.filter(item => item.cc.indexOf(query) >=0)
  
    //     const op = filter.map((_item, idx) => {
    //       return {
    //         value: _item.cc,
    //         label: (
    //           <div
    //             style={{
    //               display: "flex",
    //               justifyContent: "space-between",
    //             }}
    //           >
    //             <span>{_item.cc}</span>
    //           </div>
    //         ),
    //       };
    //     });
    //     setOptions(op);
    //   });
    // };
  
    // const handleSearch = (value) => {
    //   if(!value) reset()
    //   searchData(value)
    // };
  
    // const onSelect = (value) => {
    //   console.log(value)
    //   search(value)
    // };
  
    return (
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        // options={options}
        // onSelect={onSelect}
        // onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="Busca aquí" enterButton />
      </AutoComplete>
    );
  };
  export default Search_sale;
  