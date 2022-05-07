import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 48.75rem;
  padding: 0.813rem;
  border: 1px solid red;

  h1 {
    font-size: 1.313rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.313rem;
  }
`;
