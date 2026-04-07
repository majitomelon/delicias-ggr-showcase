import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://www.instagram.com/deliciasggr?igsh=ajNpZjZwOGc3dGt6"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Instagram"
    >
      <Instagram className="w-6 h-6" />
    </a>
    <a
      href="https://wa.me/18494583844?text=%C2%A1Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[#25D366] text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingButtons;
