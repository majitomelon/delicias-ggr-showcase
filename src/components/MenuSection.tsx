import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CakeSlice, Croissant, Cake, PartyPopper, Gift, Plus, Minus } from "lucide-react";
import { categories, type Product } from "@/data/menu";
import { useOrder } from "@/context/OrderContext";

const iconMap: Record<string, React.ReactNode> = {
  "cake-slice": <CakeSlice className="w-5 h-5" />,
  croissant: <Croissant className="w-5 h-5" />,
  cake: <Cake className="w-5 h-5" />,
  "party-popper": <PartyPopper className="w-5 h-5" />,
  gift: <Gift className="w-5 h-5" />,
};

const ProductCard = ({ product }: { product: Product }) => {
  const { items, addItem, removeItem } = useOrder();
  const inOrder = items.find((i) => i.id === product.id);

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer border ${
        inOrder
          ? "bg-accent border-primary shadow-md shadow-primary/10"
          : "bg-background border-border hover:border-primary/40 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-sm md:text-base font-semibold text-foreground truncate">
            {product.name}
          </h4>
          <p className="font-body text-primary font-bold text-sm mt-1">
            RD$ {product.price.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {inOrder && (
            <button
              onClick={() => removeItem(product.id)}
              className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4 text-foreground" />
            </button>
          )}
          {inOrder && (
            <span className="font-body font-bold text-sm w-6 text-center text-primary">
              {inOrder.quantity}
            </span>
          )}
          <button
            onClick={() => addItem(product)}
            className="w-8 h-8 rounded-full bg-primary hover:bg-fuchsia-glow text-primary-foreground flex items-center justify-center transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
            Nuestras Creaciones
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Menú
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-background text-foreground/70 hover:bg-accent hover:text-accent-foreground border border-border"
              }`}
            >
              {iconMap[cat.icon]}
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">{cat.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {categories.map(
            (cat) =>
              cat.id === activeTab && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {cat.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
