# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 7.9.3
- TailwindCSS 4.1.17
- Zustand 5.0.8 (State Management)
- TanStack Query 5.90.2 (Data Fetching)
- Lucide React (Icons)
- Shadcn/ui Components

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Assets estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   └── components/       # Componentes UI reutilizáveis
├── domain/               # Domínios de negócio
│   ├── cart/            # Domínio do carrinho
│   └── product/         # Domínio de produtos
├── pages/               # Páginas da aplicação
│   ├── layouts/        # Layouts compartilhados
│   ├── Home/           # Página inicial
│   ├── ProductDetail/  # Detalhes do produto
│   ├── Cart/           # Carrinho de compras
│   └── NotFound/       # Página 404
└── lib/                # Utilitários e helpers
```

## Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Funcionalidades

- ✅ Catálogo de produtos com dados mockados
- ✅ Filtros de produtos (categoria, preço, busca)
- ✅ Visualização detalhada de produtos
- ✅ Sistema de avaliações
- ✅ Carrinho de compras com persistência
- ✅ Design responsivo
- ✅ Navegação com React Router

## Próximos Passos

1. Implementar componentes de listagem de produtos
2. Adicionar filtros funcionais
3. Criar página de detalhes do produto
4. Implementar funcionalidade completa do carrinho
5. Adicionar sistema de avaliações

## Licença

MIT