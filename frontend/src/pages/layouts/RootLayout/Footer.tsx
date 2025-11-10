export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍰</span>
            <span className="text-sm text-muted-foreground">
              © 2024 Catálogo de Bolos. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
