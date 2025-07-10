import { Input as AntdInput } from 'antd';
import type { ComponentProps } from 'react';

type AntdInputProps = ComponentProps<typeof AntdInput>;

export default function Input(props: AntdInputProps) {
  return (
    <AntdInput
      {...props}
      size={props.size ?? 'large'}
      style={
        props.style ?? {
          border: '1p solid #ededed',
          boxShadow: '2px 2px 5px #a3a3a3',
        }
      }
    />
  );
}
