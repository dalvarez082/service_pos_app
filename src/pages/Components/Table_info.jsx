import { Space, Table, Button } from 'antd';
import { Delete, EditNote,} from '@mui/icons-material';

const data = [
  {
    cc: '123456789',
    name: 'Camila Ospina',
    alias: 'Echabolita',
    district : 'Belen Altavista',
    address: 'Escaleras',
    balance : 0,    
  },
  {
    cc: '123456789',
    name: 'Camila Ospina',
    alias: 'Echabolita',
    district : 'Belen Altavista',
    address: 'Escaleras',
    balance : 0,    
  },{
    cc: '123456789',
    name: 'Camila Ospina',
    alias: 'Echabolita',
    district : 'Belen Altavista',
    address: 'Escaleras',
    balance : 0,    
  },
];

const columns = [
  {
    title: 'CC',
    dataIndex: 'cc',
    key: 'cc',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Alias',
    dataIndex: 'alias',
    key: 'alias',
  },
  {
    title: 'Barrio',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  }, 
  {
    title: 'Saldo',
    dataIndex: 'balance',
    key: 'balance',
  },   
  {
    title: 'Acciónes',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" icon={<EditNote />} />
        <Button type="danger" icon={<Delete />} />
        

        
      </Space>
    ),
  },
];

const Table_info = () => <Table columns={columns} dataSource={data} scroll={{ y: 240 }} style={{

}} />;
export default Table_info;
