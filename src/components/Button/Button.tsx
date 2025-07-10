import { Button as AntdButton } from 'antd';

export default function Button(props) {
  return (
    <AntdButton
      {...props}
      size={props.size ?? 'large'}
      style={
        props.style ?? {
          background: 'var(--purpure-gradient)',
          color: 'white',
          boxShadow: '2px 2px 10px #a3a3a3',
          border: 'none',
        }
      }
    />
  );
}
