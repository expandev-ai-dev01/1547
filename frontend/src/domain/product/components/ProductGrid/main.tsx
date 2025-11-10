import { useMemo } from 'react';
import { ProductCard } from '../ProductCard';
import type { ProductGridProps } from './types';

/**
 * @component ProductGrid
 * @summary Displays a responsive grid of product cards with pagination
 * @domain product
 * @type ui-component
 * @category display
 */
export const ProductGrid = ({
  products,
  currentPage,
  itemsPerPage,
  onAddToCart,
}: ProductGridProps) => {
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage, itemsPerPage]);

  if (paginatedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg text-muted-foreground">Nenhum produto encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
