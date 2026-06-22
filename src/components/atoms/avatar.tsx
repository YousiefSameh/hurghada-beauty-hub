import * as React from 'react';
import { cn } from '@/utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
}

export function Avatar({ className, src, alt, fallback, ...props }: AvatarProps) {
  const [error, setError] = React.useState(false);

  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-brand-gold/20 bg-brand-dark-800 items-center justify-center text-sm font-semibold text-brand-gold uppercase',
        className
      )}
      {...props}
    >
      {src && !error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || 'Avatar'}
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{fallback.substring(0, 2)}</span>
      )}
    </div>
  );
}
export default Avatar;
