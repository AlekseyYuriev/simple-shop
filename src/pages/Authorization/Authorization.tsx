import LoginForm from '@/components/LoginForm/LoginForm';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import '@/pages/Authorization/Authorization.css';
import { Typography } from 'antd';

export interface AuthProps {
  isSignIn: boolean;
  toggleForm: () => void;
}

export default function Authorization({ isSignIn, toggleForm }: AuthProps) {
  const toggleTitle = isSignIn ? 'Sign Up' : 'Sign In';
  return (
    <div className="auth-window">
      <LoginForm />
      <RegistrationForm />
      <div
        className="auth-toggle"
        style={{
          right: isSignIn ? '0' : '50%',
        }}
        onClick={toggleForm}
      >
        <Typography.Title
          level={2}
          style={{
            color: 'white',
          }}
        >
          {toggleTitle}
        </Typography.Title>
      </div>
    </div>
  );
}
