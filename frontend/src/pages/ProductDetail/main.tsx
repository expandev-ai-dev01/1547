import { useParams } from 'react-router-dom';

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Detalhes do Produto</h1>
      <p className="text-muted-foreground">Produto ID: {id}</p>
      <p className="text-muted-foreground mt-2">Página em desenvolvimento...</p>
    </div>
  );
};

export default ProductDetailPage;
