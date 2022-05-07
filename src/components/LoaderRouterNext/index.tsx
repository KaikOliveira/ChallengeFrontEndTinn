import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container } from './styles';

interface LoaderRouterNextProps {
  isOpen: boolean;
}

export const LoaderRouterNext = ({ isOpen }: LoaderRouterNextProps) => {
  return (
    <Container className={isOpen ? 'open' : undefined}>
      <AiOutlineLoading3Quarters size={50} />
    </Container>
  );
};
