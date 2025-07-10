import { NavLink } from 'react-router';
import Button from '@/components/Button/Button';
import Styled from '@/pages/Overview/Header/Header.styled';

const { Container } = Styled;

export default function Header() {
  return (
    <Container color="white">
      <NavLink to={'/auth/0'} end>
        <Button>Sign In</Button>
      </NavLink>
      <NavLink to={'/auth/1'} end>
        <Button>Registration</Button>
      </NavLink>
    </Container>
  );
}
