import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Heart } from "lucide-react";

const ContactSection = () => (
  <section id="contacto" className="section-padding bg-cream">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
          Estamos para ti
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Contáctanos
        </h2>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <a
          href="https://wa.me/18494583844?text=%C2%A1Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-background font-body font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
        >
          <MessageCircle className="w-5 h-5" />
          Realizar Pedido vía WhatsApp
        </a>
        <a
          href="https://www.instagram.com/deliciasggr?igsh=ajNpZjZwOGc3dGt6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-background font-body font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
        >
          <Instagram className="w-5 h-5" />
          Visitar nuestro Instagram
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
        <MapPin className="w-4 h-4 text-primary" />
        Santo Domingo, República Dominicana
      </div>
    </div>
  </section>
);

export default ContactSection;
