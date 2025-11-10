import { Product, ProductFilter } from '../../types';

export interface UseProductListOptions {
  filters?: ProductFilter;
  itemsPerPage?: number;
}

export interface UseProductListReturn {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: Error | null;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortBy: string;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  setSortBy: (sort: string) => void;
  refetch: () => void;
}
