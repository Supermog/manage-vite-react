import { twMerge } from 'tailwind-merge';

import type { ButtonSizeType, ButtonVariantType } from '@/types/button-types';
import { buttonVariant, buttonSize } from '@/styles/button-styles';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

function Button({
  type = 'button',
  size,
  variant,
  startIcon,
  endIcon,
  children,
  fullWidth,
  isLoading = false,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={twMerge(
        buttonSize[size ? size : 'base'],
        buttonVariant[variant ? variant : 'primary'].button,
        fullWidth ? 'w-full' : null,
        'flex justify-center items-center gap-x-2',
        'rounded-md shadow-sm font-medium',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        disabled ? 'opacity-50' : null,
        rest?.className
      )}
    >
      <div className={buttonVariant[variant ? variant : 'primary'].icon}>
        {startIcon}
      </div>
      {isLoading ? 'Loading...' : children}
      <div className={buttonVariant[variant ? variant : 'primary'].icon}>
        {endIcon}
      </div>
    </button>
  );
}

export { Button };
