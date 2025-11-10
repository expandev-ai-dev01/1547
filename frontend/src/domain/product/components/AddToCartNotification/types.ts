import { Product } from '../../types';

export interface AddToCartNotificationProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onGoToCart: () => void;
}
