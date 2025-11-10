import { useEffect } from 'react';
import { X, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/core/components';
import type { AddToCartNotificationProps } from './types';
import { cn } from '@/lib/utils';

/**
 * @component AddToCartNotification
 * @summary Toast notification displayed when a product is added to cart
 * @domain product
 * @type domain-component
 * @category feedback
 */
export const AddToCartNotification = ({
  product,
  isOpen,
  onClose,
  onGoToCart,
}: AddToCartNotificationProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!product || !isOpen) return null;

  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-50 w-full max-w-md rounded-lg border bg-card p-4 shadow-lg transition-all',
        isOpen ? 'animate-in slide-in-from-top-2' : 'animate-out slide-out-to-top-2'
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Check className="size-5 text-green-600 dark:text-green-400" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">Produto adicionado ao carrinho!</h3>
          <div className="mt-2 flex items-center gap-3">
            <img src={product.image} alt={product.name} className="size-12 rounded object-cover" />
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-1">{product.name}</p>
              <p className="text-sm text-muted-foreground">R$ {product.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={onGoToCart} className="flex-1">
              <ShoppingCart className="size-4" />
              Ver Carrinho
            </Button>
            <Button size="sm" variant="outline" onClick={onClose}>
              Continuar Comprando
            </Button>
          </div>
        </div>

        <Button variant="ghost" size="icon-sm" onClick={onClose} className="shrink-0">
          <X className="size-4" />
        </Button>
      </div>
    </div>
  );
};
