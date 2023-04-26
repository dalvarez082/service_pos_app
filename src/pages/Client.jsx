import React from 'react';
import Table_info from './Components/Table_info';
import Search_info from './Components/Search_info';
import Add_info from './Components/Add_info';
import { useEffect, useState } from 'react';
import axios from 'axios';




const Client = () => {

  const [data, setData] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);



  const load_client = () => {
    return axios.get('http://localhost:3001/client')
      .then(res => {
        const clients = res.data.map(client => ({ ...client, key: client.cc }));
        return clients;
      })
      .catch(err => console.log(err));
  }

  const show_data_client =(id) =>{
    axios.get(`http://localhost:3001/client/${id}`)
    .then(res => {
      const client = res.data;
      console.log(client)
      return client;      
    })
    .catch(err => console.log(err))
  }

  const sent_data_form=()=>{
    //load_data_client();
  }



  const refresh_client = () => {
    load_client().then(clients => {
      setData(clients);
    });
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };


  return (   
    <div>

      <div>
        <Search_info key="search"/>
        
        <Add_info key="add" 
        refresh_client={refresh_client} 
        visible={drawerVisible}
         onClose={toggleDrawer}
         show_data_client ={show_data_client} 
         />
      </div>




      <div>
      <Table_info 
        load_client={load_client}  
        toggleDrawer={toggleDrawer}  
        show_data_client={show_data_client}
        sent_data_form = {sent_data_form}

        />
      </div>

     

    </div>



  );
};

export default Client;