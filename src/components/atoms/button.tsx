import * as React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 px-4 py-2.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-98',
          variant === 'primary' && 'bg-brand-gold text-brand-dark-950 hover:bg-brand-gold-dark shadow-md',
          variant === 'secondary' && 'bg-brand-dark-900 text-brand-light-50 hover:bg-brand-dark-800 border border-brand-gold/10',
          variant === 'outline' && 'border border-brand-light-200 text-brand-light-100 hover:bg-brand-dark-800',
          variant === 'ghost' && 'text-brand-light-200 hover:text-white hover:bg-brand-dark-900',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
export default Button;
