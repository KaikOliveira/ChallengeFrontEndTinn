import React from 'react';

import { ITypesButtonVariant } from 'assets/config/ButtonVariant';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ITypesButtonVariant;
}

const ButtonBase: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  { children, onClick, variant = 'DEFAULT', ...rest }: ButtonProps,
  refBtn
) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  const ref = refBtn || buttonRef;

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <S.Container
      variant={variant}
      onClick={(e: any) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      ref={ref}
      {...rest}
    >
      {isRippling && (
        <S.Ripple variant={variant} left={coords.x} top={coords.y} />
      )}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export const Button = React.forwardRef(ButtonBase);
