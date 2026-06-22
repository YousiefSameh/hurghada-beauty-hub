import * as React from 'react';
import { cn } from '@/utils/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-lg border border-brand-gold/10 bg-brand-dark-900 px-4 py-2 text-sm text-brand-light-50 focus:outline-none focus:ring-1 focus:ring-brand-gold/40 focus:border-brand-gold/40 transition-all duration-200 disabled:opacity-50 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';
export default Select;
