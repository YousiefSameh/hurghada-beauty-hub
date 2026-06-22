import * as React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-lg border border-brand-gold/10 bg-brand-dark-900 px-4 py-2 text-sm text-brand-light-50 placeholder:text-brand-light-200/40 focus:outline-none focus:ring-1 focus:ring-brand-gold/40 focus:border-brand-gold/40 transition-all duration-200 disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
export default Input;
