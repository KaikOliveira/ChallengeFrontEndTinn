import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, ...rest },
  ref
) => {
  return (
    <S.Container>
      <S.Input type="text" name={name} ref={ref} isError={!!error} {...rest} />
      {!!error && <S.Error>{error.message}</S.Error>}
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
