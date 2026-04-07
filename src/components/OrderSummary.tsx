import { motion } from "framer-motion";
import { ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

const OrderSummary = () => {
  const { items, removeItem, clearOrder, total, itemCount } = useOrder();

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return "";
    let msg = "¡Hola! 🎂 Me gustaría hacer un pedido:\n\n";
    items.forEach((i) => {
      msg += `• ${i.name} x${i.quantity} — RD$ ${(i.price * i.quantity).toLocaleString()}\n`;
    });
    msg += `\n*Total estimado: RD$ ${total.toLocaleString()}*\n\n¡Gracias!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/18494583844?text=${buildWhatsAppMessage()}`;

  return (
    <section id="pedido" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-3" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Tu Selección
          </h2>
        </motion.div>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-2xl border border-border">
            <p className="font-body text-muted-foreground">
              Aún no has seleccionado productos. ¡Explora nuestro menú!
            </p>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="font-body text-xs text-muted-foreground">
                      x{item.quantity} · RD$ {item.price.toLocaleString()} c/u
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-body font-bold text-sm text-primary">
                      RD$ {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 bg-accent/50 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-foreground">Total</span>
              <span className="font-display text-xl font-bold text-primary">
                RD$ {total.toLocaleString()}
              </span>
            </div>

            <div className="px-5 py-5 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-background font-body font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </a>
              <button
                onClick={clearOrder}
                className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-muted-foreground font-body font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Limpiar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSummary;
