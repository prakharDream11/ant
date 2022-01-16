import { Button , Pagination, Input , Progress , Alert } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
   <>
       <Button type="primary">Primary Button</Button>
       <Pagination defaultCurrent={1} total={50} />
       <Input placeholder="Basic usage" />
       <Alert message="Success Text" type="success" />
       <Progress type="circle" percent={75} />
   </>
  );
}

export default App;
