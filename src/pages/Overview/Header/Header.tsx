import { NavLink } from 'react-router';
import Button from '@/components/Button/Button';
import '@/pages/Overview/Header/Header.css';

export default function Header() {
  return (
    <div className="overview-header-container">
      <NavLink to={'/auth/0'} end>
        <Button>Sign In</Button>
      </NavLink>
      <NavLink to={'/auth/1'} end>
        <Button>Registration</Button>
      </NavLink>
    </div>
  );
}
