import { Button as AntdButton } from 'antd';
import type { ComponentProps } from 'react';

type AntdButtonProps = ComponentProps<typeof AntdButton>;

export default function Button(props: AntdButtonProps) {
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
