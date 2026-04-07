import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bakery.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Delicias GGR pastelería" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-fuchsia-light mb-4">
          Pastelería & Panadería Artesanal
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Delicias <span className="text-primary">GGR</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
          Endulzamos tus momentos especiales con los sabores más exquisitos de Santo Domingo.
        </p>
        <a
          href="#menu"
          className="inline-block bg-primary hover:bg-fuchsia-glow text-primary-foreground font-body font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-base"
        >
          Ver Menú
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
