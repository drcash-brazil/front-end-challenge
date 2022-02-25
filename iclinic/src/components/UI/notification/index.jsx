import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = message  => {
  notification.open({
    message: 'Iclinic',
    description:message
      ,
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

  
  export default openNotification