export interface ProductControlsProps {
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortBy: string;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sort: string) => void;
}
