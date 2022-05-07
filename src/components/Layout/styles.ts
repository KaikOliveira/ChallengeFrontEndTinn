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
  padding: 1.313rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.813rem;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
`;
