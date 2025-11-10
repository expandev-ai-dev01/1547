import { Product } from '../../types';

export interface ProductGridProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onAddToCart: (product: Product) => void;
}
