import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;

    @media (max-width: 436px) {
      font-size: 1rem;
    }
  }

  header {
    display: flex;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLow};
    margin-top: 1rem;

    @media (max-width: 495px) {
      position: relative;
    }

    button {
      border-radius: 0.313rem;
      border: none;
      padding: 0.713rem 1rem;
      background: transparent;
      color: ${({ theme }) => theme.colors.grayText};
      font-size: 1rem;
      transition: all 0.3s ease-in;
      display: flex;
      align-items: center;

      @media (max-width: 436px) {
        padding: 0.413rem 0.735rem;
      }

      &.active {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.main};
      }

      svg {
        margin-right: 0.2rem;

        @media (max-width: 547px) {
          display: none;
        }
      }

      & + button {
        margin-left: 1rem;
      }

      & + button:last-child {
        background: ${({ theme }) => theme.colors.grayLow};
        margin-left: auto;

        @media (max-width: 495px) {
          position: absolute;
          top: -3.2rem;
          right: 0;
        }
      }
    }
  }
`;
