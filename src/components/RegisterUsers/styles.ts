import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 1rem 0;

    @media (max-width: 495px) {
      font-size: 0.935rem;
    }
  }

  form {
    max-width: 21.875rem;

    button {
      margin-top: 1rem;
    }
  }
`;
