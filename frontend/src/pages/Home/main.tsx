import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { ProductControls } from '@/domain/product/components/ProductControls';
import { LoadingSpinner } from '@/core/components';
import { Toast } from '@/core/components/toast';
import { useCartStore } from '@/domain/cart/stores/cartStore';
import { Product } from '@/domain/product/types';

/**
 * @page HomePage
 * @summary Main catalog page displaying product list with filters and pagination
 * @domain product
 * @type list-page
 * @category product-management
 */
export const HomePage = () => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);
  const [toast, setToast] = useState<{
    show: boolean;
    product?: Product;
  }>({ show: false });

  const {
    filteredProducts,
    isLoading,
    currentPage,
    totalPages,
    itemsPerPage,
    sortBy,
    setCurrentPage,
    setItemsPerPage,
    setSortBy,
  } = useProductList();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setToast({ show: true, product });
  };

  const handleCloseToast = () => {
    setToast({ show: false });
  };

  const handleViewCart = () => {
    navigate('/carrinho');
    setToast({ show: false });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Catálogo de Bolos</h1>
        <p className="text-muted-foreground">Descubra nossos deliciosos bolos artesanais</p>
      </div>

      <div className="space-y-6">
        <ProductControls
          totalProducts={filteredProducts.length}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          sortBy={sortBy}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
          onSortChange={setSortBy}
        />

        <ProductGrid
          products={filteredProducts}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onAddToCart={handleAddToCart}
        />

        {totalPages > 1 && (
          <ProductControls
            totalProducts={filteredProducts.length}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            sortBy={sortBy}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            onSortChange={setSortBy}
          />
        )}
      </div>

      {toast.show && toast.product && (
        <Toast
          title="Produto adicionado ao carrinho"
          description={toast.product.name}
          image={toast.product.image}
          price={toast.product.price}
          onClose={handleCloseToast}
          onViewCart={handleViewCart}
        />
      )}
    </div>
  );
};

export default HomePage;
