import React from 'react';
import Table_info from './Components/Table_info';
import Search_info from './Components/Search_info';

const Client = () => {
  return (   

    <div>

      <div>
        <Search_info></Search_info>

      </div>



      <div style={{
        height : '80%'
      }}>
      <Table_info></Table_info>
      </div>

     

    </div>



  );
};

export default Client;