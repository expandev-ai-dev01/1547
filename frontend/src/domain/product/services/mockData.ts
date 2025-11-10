import { Product, Review } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com cobertura cremosa',
    price: 45.9,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    category: 'Chocolate',
    rating: 4.8,
    reviewCount: 24,
    ingredients: ['Chocolate', 'Farinha', 'Ovos', 'Açúcar', 'Manteiga'],
    sizes: ['Pequeno', 'Médio', 'Grande'],
  },
  {
    id: '2',
    name: 'Bolo de Morango',
    description: 'Bolo leve com morangos frescos e chantilly',
    price: 52.9,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    category: 'Frutas',
    rating: 4.9,
    reviewCount: 31,
    ingredients: ['Morango', 'Farinha', 'Ovos', 'Açúcar', 'Chantilly'],
    sizes: ['Pequeno', 'Médio', 'Grande'],
  },
  {
    id: '3',
    name: 'Bolo de Cenoura',
    description: 'Tradicional bolo de cenoura com cobertura de chocolate',
    price: 38.9,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
    category: 'Tradicional',
    rating: 4.7,
    reviewCount: 18,
    ingredients: ['Cenoura', 'Farinha', 'Ovos', 'Açúcar', 'Chocolate'],
    sizes: ['Pequeno', 'Médio', 'Grande'],
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Maria Silva',
    rating: 5,
    comment: 'Melhor bolo de chocolate que já comi! Muito saboroso.',
    date: '2024-01-15',
  },
  {
    id: '2',
    productId: '1',
    userName: 'João Santos',
    rating: 4,
    comment: 'Muito bom, mas achei um pouco doce.',
    date: '2024-01-10',
  },
  {
    id: '3',
    productId: '2',
    userName: 'Ana Costa',
    rating: 5,
    comment: 'Perfeito! Os morangos estavam fresquinhos.',
    date: '2024-01-12',
  },
];
