import { InputHTMLAttributes } from 'react';
import { Group } from './styles';

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function InputGroup({ name, label, ...rest }: InputGroupProps) {
  return (
    <Group>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...rest} />
    </Group>
  )
}