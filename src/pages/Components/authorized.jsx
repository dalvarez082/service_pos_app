import { Button, Result } from 'antd';

const Authorized= () => {

    const redirect = () => {
        window.location.href = '/Login';}

    return(
    <Result
        status="403"
        title="403"
        subTitle="Perdón, tu no tienes acceso a esta página."
        extra={<Button type="primary" onClick={redirect}>vuelve a login</Button>}
    />)
};

export default Authorized;