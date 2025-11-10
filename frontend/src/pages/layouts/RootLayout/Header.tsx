import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/core/components';
import { useCartStore } from '@/domain/cart/stores/cartStore';

export const Header = () => {
  const itemCount = useCartStore((state) => state.items.length);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">🍰</span>
          <span className="text-xl font-semibold">Catálogo de Bolos</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Catálogo
          </Link>
          <Link to="/carrinho">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="size-4" />
              <span className="hidden sm:inline">Carrinho</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
