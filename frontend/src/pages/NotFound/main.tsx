import { Link } from 'react-router-dom';
import { Button } from '@/core/components';

export const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
      <p className="text-muted-foreground mb-8">A página que você está procurando não existe.</p>
      <Link to="/">
        <Button>Voltar para o catálogo</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
