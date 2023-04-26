import React from 'react';
import Table_info from './Components/Table_info';
import Search_info from './Components/Search_info';
import Add_info from './Components/Add_info';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { load_client } from './Components/Add_info';





const Client = () => {

  const [data, setData] = useState([]);

  const load_client = () => {
    return axios.get('http://localhost:3001/client')
      .then(res => {
        const clients = res.data.map(client => ({ ...client, key: client.cc }));
        return clients;
      })
      .catch(err => console.log(err));
  }

  const refresh_client = () => {
    load_client().then(clients => {
      setData(clients);
    });
  };


  return (   
    <div>

      <div>
        <Search_info key="search"/>
        <Add_info key="add" refresh_client={refresh_client}/>
      </div>




      <div>
      <Table_info load_client={load_client}/>
      </div>

     

    </div>



  );
};

export default Client;