export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "porciones",
    name: "Porciones Individuales y Postres Fríos",
    icon: "cake-slice",
    products: [
      { id: "p1", name: "Cheesecake de Fresa", price: 250, category: "porciones" },
      { id: "p2", name: "Tiramisú Individual", price: 280, category: "porciones" },
      { id: "p3", name: "Mousse de Chocolate", price: 220, category: "porciones" },
      { id: "p4", name: "Panna Cotta", price: 230, category: "porciones" },
      { id: "p5", name: "Flan de Caramelo", price: 200, category: "porciones" },
      { id: "p6", name: "Copa de Frutas con Crema", price: 260, category: "porciones" },
    ],
  },
  {
    id: "panaderia",
    name: "Panadería y Salados",
    icon: "croissant",
    products: [
      { id: "s1", name: "Croissant de Mantequilla", price: 120, category: "panaderia" },
      { id: "s2", name: "Pan de Queso", price: 100, category: "panaderia" },
      { id: "s3", name: "Empanada de Pollo", price: 150, category: "panaderia" },
      { id: "s4", name: "Quiche de Jamón y Queso", price: 280, category: "panaderia" },
      { id: "s5", name: "Pan Sobao", price: 80, category: "panaderia" },
      { id: "s6", name: "Rollito de Canela", price: 130, category: "panaderia" },
    ],
  },
  {
    id: "bizcochos",
    name: "Bizcochos y Pudines (Enteros)",
    icon: "cake",
    products: [
      { id: "b1", name: "Bizcocho de Vainilla (entero)", price: 1200, category: "bizcochos" },
      { id: "b2", name: "Bizcocho de Chocolate (entero)", price: 1400, category: "bizcochos" },
      { id: "b3", name: "Pudín de Pan", price: 900, category: "bizcochos" },
      { id: "b4", name: "Bizcocho de Zanahoria", price: 1300, category: "bizcochos" },
      { id: "b5", name: "Bizcocho Red Velvet", price: 1500, category: "bizcochos" },
      { id: "b6", name: "Pudín de Frutas", price: 1000, category: "bizcochos" },
    ],
  },
  {
    id: "cumpleanos",
    name: "Bizcochos de Cumpleaños",
    icon: "party-popper",
    products: [
      { id: "c1", name: "Bizcocho Temático Infantil", price: 2500, category: "cumpleanos" },
      { id: "c2", name: "Bizcocho Elegante 2 Pisos", price: 3500, category: "cumpleanos" },
      { id: "c3", name: "Bizcocho con Flores Naturales", price: 3000, category: "cumpleanos" },
      { id: "c4", name: "Bizcocho Minimalista", price: 2200, category: "cumpleanos" },
      { id: "c5", name: "Cupcakes de Cumpleaños (docena)", price: 1800, category: "cumpleanos" },
    ],
  },
  {
    id: "mesa-dulces",
    name: "Mesa de Dulces",
    icon: "gift",
    products: [
      { id: "m1", name: "Mesa Dulce Básica (20 personas)", price: 5000, category: "mesa-dulces" },
      { id: "m2", name: "Mesa Dulce Premium (40 personas)", price: 9000, category: "mesa-dulces" },
      { id: "m3", name: "Mesa Dulce Deluxe (60+ personas)", price: 14000, category: "mesa-dulces" },
      { id: "m4", name: "Candy Bar Personalizado", price: 6500, category: "mesa-dulces" },
    ],
  },
];
