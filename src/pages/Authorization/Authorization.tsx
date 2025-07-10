import { useParams } from 'react-router';
import { Typography } from 'antd';
import '@/pages/Authorization/Authorization.css';
import LoginForm from '@/components/LoginForm/LoginForm';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';

export interface AuthProps {
  isSignIn: boolean;
  toggleForm: () => void;
}

export default function Authorization({ isSignIn, toggleForm }: AuthProps) {
  const params = useParams();

  const isRegistration =
    params['isRegistration'] === '1' ? !isSignIn : isSignIn;

  const toggleTitle = isRegistration ? 'Sign Up' : 'Sign In';

  return (
    <div className="auth-window">
      <LoginForm />
      <RegistrationForm />
      <div
        className="auth-toggle"
        style={{
          right: isRegistration ? '0' : '50%',
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
