import styled from 'styled-components';

export const Container = styled.div``;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-height: 6rem;

  thead tr {
    color: ${({ theme }) => theme.colors.grayMedium};
    font: 600 0.875rem 'Inter', sans-serif;

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
    }

    td {
      padding: 1.125rem 0.625rem;
      border-top: 1px solid ${({ theme }) => theme.colors.grayLow};

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
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
