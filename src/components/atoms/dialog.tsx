import * as React from 'react';
import { cn } from '@/utils/cn';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, children, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Container */}
      <div
        className={cn(
          'relative w-full max-w-lg bg-brand-dark-900 border border-brand-gold/15 p-6 rounded-2xl shadow-2xl flex flex-col gap-4 z-10 animate-in fade-in zoom-in-95 duration-200',
          className
        )}
      >
        <div className="flex justify-between items-center border-b border-brand-gold/10 pb-3">
          {title && <h3 className="font-serif text-lg font-semibold text-brand-gold">{title}</h3>}
          <button
            onClick={onClose}
            className="text-brand-light-200 hover:text-white transition-colors cursor-pointer text-sm"
          >
            &#x2715;
          </button>
        </div>
        <div className="text-brand-light-100 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
export default Dialog;
