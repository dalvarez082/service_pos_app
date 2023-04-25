import { Space, Table, Button } from 'antd';
import { Delete, EditNote } from '@mui/icons-material';
import db from '../../data/db.json';

const columns = [
  {
    title: 'CC',
    dataIndex: 'key',
    key: 'cc',
    
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    
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
    title: 'Fecha nacimiento',
    dataIndex: 'birth_date',
    key: 'birth_date',
  }, 
  {
    title: 'Acciones',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" icon={<EditNote />} />
        <Button type="danger" icon={<Delete />} />
      </Space>
    ),
  },
];

const Table_info = () => <Table columns={columns} dataSource={db.client} scroll={{ y: 240 }} style={{}} />;
export default Table_info;
