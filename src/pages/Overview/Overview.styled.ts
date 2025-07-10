import styled from 'styled-components';

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.theme.isDarkTheme
        ? 'var(--overview-gradient-dark)'
        : 'var(--overview-gradient)'};
  `,
};
