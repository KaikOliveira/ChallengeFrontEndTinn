import {
  buttonConfigVariant,
  ITypesButtonVariant
} from 'assets/config/ButtonVariant';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface RippleProps {
  variant: ITypesButtonVariant;
  left: number;
  top: number;
}

interface ButtonContainerProps {
  variant: ITypesButtonVariant;
}

export const Container = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  border: none;
  margin: 8px;
  padding: 14px 24px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in;

  ${({ variant }) => css`
    ${buttonConfigVariant[variant]}

    &:hover {
      ${buttonConfigVariant[variant].hover}
    }
  `};
`;

export const Ripple = styled.span<RippleProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  background: ${({ variant }) =>
    lighten(0.07, buttonConfigVariant[variant].background)};
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  display: block;
  content: '';
  border-radius: 9999px;
  opacity: 1;
  animation: 1s ease 1 forwards ripple-effect;

  @keyframes ripple-effect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(10);
      opacity: 0.375;
    }
    100% {
      transform: scale(35);
      opacity: 0;
    }
  }
`;

export const Content = styled.span`
  position: relative;
  z-index: 2;
`;
