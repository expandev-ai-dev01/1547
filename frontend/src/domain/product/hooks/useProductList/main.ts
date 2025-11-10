import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/productService';
import type { UseProductListOptions, UseProductListReturn } from './types';
import { Product } from '../../types';

/**
 * @hook useProductList
 * @summary Manages product list with pagination, sorting and filtering
 * @domain product
 * @type domain-hook
 * @category data
 */
export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const { filters, itemsPerPage: initialItemsPerPage = 12 } = options;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortBy, setSortBy] = useState('relevancia');

  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
    staleTime: 5 * 60 * 1000,
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters?.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters?.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters?.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }

    switch (sortBy) {
      case 'preco_crescente':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'preco_decrescente':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nome_az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nome_za':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'avaliacao':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'relevancia':
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [products, filters, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleSetCurrentPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSetItemsPerPage = useCallback((items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  }, []);

  const handleSetSortBy = useCallback((sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  }, []);

  return {
    products,
    filteredProducts,
    isLoading,
    error: error as Error | null,
    currentPage,
    totalPages,
    itemsPerPage,
    sortBy,
    setCurrentPage: handleSetCurrentPage,
    setItemsPerPage: handleSetItemsPerPage,
    setSortBy: handleSetSortBy,
    refetch,
  };
};
