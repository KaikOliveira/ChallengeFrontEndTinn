import styled from 'styled-components';

export const Container = styled.div`
  max-height: 72vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backdrop};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-height: 6rem;

  thead tr {
    color: ${({ theme }) => theme.colors.grayMedium};
    font: 600 0.875rem 'Inter', sans-serif;

    @media (max-width: 674px) {
      display: none;
    }

    th {
      padding: 1.25rem 0;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }

  tbody {
    position: relative;
  }

  tbody tr {
    &:last-of-type td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grayLow};

      @media (max-width: 674px) {
        border-bottom: none;
      }
    }

    @media (max-width: 674px) {
      display: flex;
      flex-direction: column;
      border-top: none;
      border: 1px solid ${({ theme }) => theme.colors.grayLow};
      border-radius: 0.8rem;

      & + tr {
        margin-top: 1rem;
      }
    }

    td {
      padding: 1.125rem 0.625rem;
      border-top: 1px solid ${({ theme }) => theme.colors.grayLow};

      @media (max-width: 674px) {
        display: flex;
        justify-content: space-between;
        border-top: none;
        border-bottom: none;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        &.descriptionMobile {
          display: none;

          @media (max-width: 674px) {
            display: flex;
          }
        }

        > span {
          color: ${({ theme }) => theme.colors.grayText};
          font-size: 0.875rem;
          text-align: center;
        }
      }
    }
  }
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLow};

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grayText};
    font-weight: 500;
  }
`;
