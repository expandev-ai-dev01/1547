import { Product } from '../types';
import { mockProducts } from './mockData';

/**
 * @service productService
 * @summary Service for product catalog operations with mocked data
 * @domain product
 * @type data-service
 * @category product-management
 */
export const productService = {
  /**
   * @method getProducts
   * @summary Fetches all products from mock data
   * @returns {Promise<Product[]>} List of all products
   */
  async getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 300);
    });
  },

  /**
   * @method getProductById
   * @summary Fetches a single product by ID
   * @param {string} id - Product ID
   * @returns {Promise<Product | null>} Product or null if not found
   */
  async getProductById(id: string): Promise<Product | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === id);
        resolve(product || null);
      }, 200);
    });
  },
};
