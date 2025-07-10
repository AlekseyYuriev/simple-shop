import styled from 'styled-components';

export default {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2em;
    height: 4em;
    padding-right: 1em;
    padding-left: 1em;
    box-shadow: 2px 2px 10px #7b7b7b;
    background: ${(props) => props.color};
  `,
};
