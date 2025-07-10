import { Form, FormProps } from 'antd';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import '@/components/RegistrationForm/RegistrationForm.css';
import signInIcon from '@/assets/icons/signUpIcon.png';

type FieldType = {
  username?: string;
  mail?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegistrationForm() {
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
        <img src={signInIcon} alt="sign-up-icon" className="login-form-icon" />
      </div>
      <Form
        name="signUp"
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
          label="Mail"
          name="mail"
          rules={[{ required: true, message: 'Please input your mail!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item label={null} style={{ margin: 'auto' }}>
          <Button htmlType="submit">Sign Up</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
