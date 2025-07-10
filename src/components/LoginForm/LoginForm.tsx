import { Form, FormProps } from 'antd';
import { NavLink } from 'react-router';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import '@/components/LoginForm/LoginForm.css';
import signInIcon from '@/assets/icons/signInIcon.png';

type FieldType = {
  username?: string;
  password?: string;
};

export default function LoginForm() {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-form">
      <div>
        <img src={signInIcon} alt="sign-in-icon" className="login-form-icon" />
      </div>
      <Form
        name="signIn"
        style={{ display: 'flex', flexDirection: 'column', width: '70%' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item label={null} style={{ margin: 'auto' }}>
          <NavLink to={'/main'}>
            <Button htmlType="submit">Sign In</Button>
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}
