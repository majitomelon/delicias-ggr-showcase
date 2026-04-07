import { motion } from "framer-motion";
import { MessageSquare, CalendarClock, CreditCard, Gift } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "Consulta Previa",
    desc: "Escríbenos por WhatsApp para consultar disponibilidad y personalización.",
  },
  {
    icon: <CalendarClock className="w-7 h-7" />,
    title: "Reserva con Anticipación",
    desc: "Haz tu pedido con 2-3 días de antelación para garantizar la preparación.",
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: "Pago del 60%",
    desc: "Se requiere un adelanto del 60% del total para procesar tu pedido.",
  },
  {
    icon: <Gift className="w-7 h-7" />,
    title: "Empaque Especial",
    desc: "Ofrecemos empaques de regalo personalizados para cada ocasión.",
  },
];

const OrderInfo = () => (
  <section id="como-pedir" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
          Proceso Simple
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground">
          ¿Cómo Pedir?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-foreground/10"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
              {step.icon}
            </div>
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
              {i + 1}
            </div>
            <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">
              {step.title}
            </h3>
            <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OrderInfo;
