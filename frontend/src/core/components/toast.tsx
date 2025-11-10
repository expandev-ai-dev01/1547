import * as React from 'react';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToastProps {
  title: string;
  description?: string;
  image?: string;
  price?: number;
  onClose: () => void;
  onViewCart?: () => void;
}

export const Toast = ({ title, description, image, price, onClose, onViewCart }: ToastProps) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        'pointer-events-auto fixed top-4 right-4 z-50 w-full max-w-sm overflow-hidden rounded-lg border bg-background shadow-lg',
        'animate-in slide-in-from-top-full'
      )}
    >
      <div className="flex items-start gap-3 p-4">
        {image && <img src={image} alt={title} className="size-16 rounded-md object-cover" />}
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold">{title}</p>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          {price !== undefined && (
            <p className="text-sm font-bold text-primary">R$ {price.toFixed(2)}</p>
          )}
          {onViewCart && (
            <button
              onClick={onViewCart}
              className="text-sm font-medium text-primary hover:underline"
            >
              Ver carrinho
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};
