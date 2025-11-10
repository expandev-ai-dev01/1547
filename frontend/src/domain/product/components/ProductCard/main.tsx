import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Card, CardContent, Button, Badge } from '@/core/components';
import type { ProductCardProps } from './types';

/**
 * @component ProductCard
 * @summary Displays a product card with image, name, price, rating and add to cart button
 * @domain product
 * @type ui-component
 * @category display
 */
export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="size-4 fill-yellow-400 text-yellow-400"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        );
      } else {
        stars.push(<Star key={i} className="size-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <CardContent className="space-y-3">
        <Link to={`/produto/${product.id}`} className="block">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-1">
          {renderStars(product.rating)}
          <span className="text-sm text-muted-foreground ml-1">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <Badge variant="secondary" className="text-xs">
          {product.category}
        </Badge>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-primary">R$ {product.price.toFixed(2)}</p>
          </div>
          <Button
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="shrink-0"
          >
            <ShoppingCart className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
