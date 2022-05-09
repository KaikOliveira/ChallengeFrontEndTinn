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
  isLoading: boolean;
  maxWidth?: string;
}

type LoadingComponentProps = {
  isShow: boolean;
  variant: ITypesButtonVariant;
};

export const Container = styled.button<ButtonContainerProps>`
  border-radius: 0.313rem;
  border: none;
  padding: 0.713rem 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in;
  width: 100%;

  ${({ variant }) => css`
    ${buttonConfigVariant[variant]}

    &:hover {
      ${buttonConfigVariant[variant].hover}
    }
  `};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ripple = styled.span<RippleProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  background: ${({ variant }) =>
    lighten(0.06, buttonConfigVariant[variant].background)};
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  display: block;
  content: '';
  border-radius: 9999px;
  opacity: 1;
  animation: 1.5s ease 1 forwards ripple-effect;

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
  font-size: 0.938rem;
  font-weight: 500;
`;

export const LoadingComponent = styled.div<LoadingComponentProps>`
  ${({ isShow, variant }) =>
    css`
      color: ${buttonConfigVariant[variant].color};
      position: absolute;
      inset: 0;
      visibility: ${isShow ? 'visible' : 'hidden'};
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        animation: loading 1.5s linear infinite;
      }

      @keyframes loading {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(-360deg);
        }
      }
    `}
`;
