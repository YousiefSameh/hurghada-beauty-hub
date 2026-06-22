import * as React from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[80px] w-full rounded-lg border border-brand-gold/10 bg-brand-dark-900 px-4 py-3 text-sm text-brand-light-50 placeholder:text-brand-light-200/40 focus:outline-none focus:ring-1 focus:ring-brand-gold/40 focus:border-brand-gold/40 transition-all duration-200 disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
export default Textarea;
