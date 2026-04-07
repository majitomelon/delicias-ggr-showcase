import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary py-8 px-4">
    <div className="container mx-auto text-center">
      <p className="font-display text-xl font-bold text-primary mb-2">Delicias GGR</p>
      <p className="font-body text-sm text-secondary-foreground/60 mb-1">
        Creado con <Heart className="w-3.5 h-3.5 inline text-primary fill-primary" /> por Majito.lab
      </p>
      <p className="font-body text-xs text-secondary-foreground/40">
        Santo Domingo, RD · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
