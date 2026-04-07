import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/data/menu";

interface OrderItem extends Product {
  quantity: number;
}

interface OrderContextType {
  items: OrderItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearOrder: () => void;
  total: number;
  itemCount: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<OrderItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) => i.id === productId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter((i) => i.id !== productId);
    });
  }, []);

  const clearOrder = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <OrderContext.Provider value={{ items, addItem, removeItem, clearOrder, total, itemCount }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
};
