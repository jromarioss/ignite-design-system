import { ComponentProps } from 'react';

import { Input, Prefix, TextInputConainer } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputConainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputConainer>
  );
}

TextInput.displayName = 'TextInput';