import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Category, Product } from "@/lib/products";

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  color: string;
  qty: number;
}

interface StoreCtx {
  cart: CartItem[];
  addToCart: (p: Product, size: string, color: string) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  quickView: Product | null;
  setQuickView: (p: Product | null) => void;
  activeCategory: Category | "Todos";
  setActiveCategory: (c: Category | "Todos") => void;
}

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");

  const addToCart = useCallback((p: Product, size: string, color: string) => {
    setCart((prev) => {
      const key = `${p.id}-${size}-${color}`;
      const existing = prev.find((i) => i.id === key);
      if (existing) {
        return prev.map((i) => (i.id === key ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: key, product: p, size, color, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.product.price, 0);

  return (
    <Ctx.Provider
      value={{
        cart, addToCart, removeFromCart, updateQty, clearCart,
        cartCount, cartTotal,
        cartOpen, setCartOpen,
        menuOpen, setMenuOpen,
        quickView, setQuickView,
        activeCategory, setActiveCategory,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be inside StoreProvider");
  return ctx;
}
