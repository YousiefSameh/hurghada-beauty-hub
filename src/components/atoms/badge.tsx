import * as React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors duration-200 border',
        variant === 'default' && 'bg-brand-gold/10 border-brand-gold/20 text-brand-gold',
        variant === 'success' && 'bg-status-success/10 border-status-success/20 text-status-success',
        variant === 'warning' && 'bg-status-warning/10 border-status-warning/20 text-status-warning',
        variant === 'error' && 'bg-status-error/10 border-status-error/20 text-status-error',
        variant === 'outline' && 'bg-transparent border-brand-light-200/20 text-brand-light-100',
        className
      )}
      {...props}
    />
  );
}
export default Badge;
