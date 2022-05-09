import styled from 'styled-components';
import { colors } from 'styles/theme/colors';

const colorError = {
  success: { color: colors.green },
  warn: { color: colors.yellow },
  error: { color: colors.pink }
};

type typeError = {
  typeError: 'success' | 'warn' | 'error';
};

export const Container = styled.div<typeError>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  z-index: 9999999999999999999;

  span {
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 0.9375rem;
    color: ${(props) => colorError[props.typeError].color};
    margin-bottom: 0.3125rem;
  }

  p {
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 0.8125rem;
    color: ${({ theme }) => theme.colors.grayHigh};
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
