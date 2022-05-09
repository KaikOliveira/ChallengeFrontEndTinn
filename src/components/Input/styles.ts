import styled, { css } from 'styled-components';

interface InputProps {
  isError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }
`;

export const Input = styled.input<InputProps>`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.title};
  padding-bottom: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 0.2rem;
  transition: all 0.3s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  ${({ isError, theme }) =>
    isError &&
    css`
      border-bottom: 1px solid ${theme.colors.error};
      color: ${theme.colors.error};
    `}
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.3rem;
`;
