export interface CatalogControlsProps {
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortBy: string;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
  onSortChange: (sort: string) => void;
}
