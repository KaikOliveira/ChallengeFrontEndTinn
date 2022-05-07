import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backdrop};
  position: fixed;
  z-index: -1;
  inset: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};
  transition: all 0.3s;

  &.open {
    z-index: 9999999999999;
    opacity: 1;
    visibility: visible;
  }

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
`;
