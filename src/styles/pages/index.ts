import styled from 'styled-components';

export const Content = styled.div`
  h1 {
    font-size: 1.313rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.313rem;
  }

  section {
    display: flex;
    margin-top: 1rem;
    gap: 0.813rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & + div {
        margin-left: 0.813rem;
      }

      > span {
        margin-bottom: 0.313rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
