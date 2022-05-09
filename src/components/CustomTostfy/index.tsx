import React from 'react';

import {
  IconToastError,
  IconToastSucess,
  IconToastWarn
} from 'assets/icons/icons';

import { Container, IconContainer } from './styles';

interface CustomToastProps {
  title?: string;
  message: string;
  status: 'success' | 'warn' | 'error';
}

export const CustomToast = ({ title, message, status }: CustomToastProps) => {
  const icon = {
    success: <IconToastSucess />,
    warn: <IconToastWarn />,
    error: <IconToastError />
  };

  return (
    <>
      <Container typeError={status}>
        <IconContainer>{icon[status]}</IconContainer>
        <div className="message">
          {!!title && <span>{title}</span>}
          <p>{message}</p>
        </div>
      </Container>
    </>
  );
};
