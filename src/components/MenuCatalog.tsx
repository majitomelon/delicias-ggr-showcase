import { motion } from "framer-motion";
import catPorciones from "@/assets/cat-porciones.jpg";
import catPanaderia from "@/assets/cat-panaderia.jpg";
import catBizcochos from "@/assets/cat-bizcochos.jpg";
import catCumpleanos from "@/assets/cat-cumpleanos.jpg";
import catMesaDulces from "@/assets/cat-mesa-dulces.jpg";

interface Product {
  name: string;
  price: number;
}

interface CategoryData {
  name: string;
  image: string;
  products: Product[];
}

const catalogData: CategoryData[] = [
  {
    name: "Porciones Individuales y Postres Fríos",
    image: catPorciones,
    products: [
      { name: "Cheesecake de Fresa", price: 250 },
      { name: "Tiramisú Individual", price: 280 },
      { name: "Mousse de Chocolate", price: 220 },
      { name: "Panna Cotta", price: 230 },
      { name: "Flan de Caramelo", price: 200 },
      { name: "Copa de Frutas con Crema", price: 260 },
    ],
  },
  {
    name: "Panadería y Salados",
    image: catPanaderia,
    products: [
      { name: "Croissant de Mantequilla", price: 120 },
      { name: "Pan de Queso", price: 100 },
      { name: "Empanada de Pollo", price: 150 },
      { name: "Quiche de Jamón y Queso", price: 280 },
      { name: "Pan Sobao", price: 80 },
      { name: "Rollito de Canela", price: 130 },
    ],
  },
  {
    name: "Bizcochos y Pudines (Enteros)",
    image: catBizcochos,
    products: [
      { name: "Bizcocho de Vainilla", price: 1200 },
      { name: "Bizcocho de Chocolate", price: 1400 },
      { name: "Pudín de Pan", price: 900 },
      { name: "Bizcocho de Zanahoria", price: 1300 },
      { name: "Bizcocho Red Velvet", price: 1500 },
      { name: "Pudín de Frutas", price: 1000 },
    ],
  },
  {
    name: "Bizcochos de Cumpleaños",
    image: catCumpleanos,
    products: [
      { name: "Bizcocho Temático Infantil", price: 2500 },
      { name: "Bizcocho Elegante 2 Pisos", price: 3500 },
      { name: "Bizcocho con Flores Naturales", price: 3000 },
      { name: "Bizcocho Minimalista", price: 2200 },
      { name: "Cupcakes de Cumpleaños (docena)", price: 1800 },
    ],
  },
  {
    name: "Mesa de Dulces",
    image: catMesaDulces,
    products: [
      { name: "Mesa Dulce Básica (20 pers.)", price: 5000 },
      { name: "Mesa Dulce Premium (40 pers.)", price: 9000 },
      { name: "Mesa Dulce Deluxe (60+ pers.)", price: 14000 },
      { name: "Candy Bar Personalizado", price: 6500 },
    ],
  },
];

const MenuCatalog = () => (
  <section id="menu" className="section-padding bg-cream">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
          Nuestras Creaciones
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Menú
        </h2>
      </motion.div>

      <div className="space-y-16">
        {catalogData.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Products */}
            <div className="w-full lg:w-7/12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                {cat.name}
              </h3>
              <div className="space-y-3">
                {cat.products.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between gap-3 border-b border-border/60 pb-3"
                  >
                    <span className="font-body text-sm md:text-base text-foreground">
                      {p.name}
                    </span>
                    <span className="font-display font-bold text-sm md:text-base text-primary whitespace-nowrap">
                      RD$ {p.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuCatalog;
