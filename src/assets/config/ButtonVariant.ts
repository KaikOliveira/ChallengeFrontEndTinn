import { shade } from 'polished';
import { theme } from 'styles/theme';

/* eslint-disable no-unused-vars */
export type ITypesButtonVariant = 'DEFAULT' | 'SECONDARY';

type IEnumButtonVariant = {
  [key in ITypesButtonVariant]: string;
};

export const EnumButtonVariant: IEnumButtonVariant = {
  DEFAULT: 'DEFAULT',
  SECONDARY: 'SECONDARY'
};

export const buttonConfigVariant = {
  DEFAULT: {
    background: theme.colors.main,
    color: theme.colors.white,
    hover: {
      background: shade(0.08, theme.colors.main)
    }
  },
  SECONDARY: {
    background: theme.colors.disabled,
    color: theme.colors.textDisabled,
    hover: {
      background: shade(0.15, theme.colors.disabled)
    }
  }
};
