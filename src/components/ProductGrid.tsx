import { useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/contexts/StoreContext";
import { ProductCard } from "./ProductCard";

const FILTERS = ["Todos", "Tênis", "Camisas", "Calças", "Jaquetas", "Acessórios", "Moletons"] as const;

export function ProductGrid() {
  const { activeCategory, setActiveCategory } = useStore();
  const items = useMemo(
    () => (activeCategory === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section id="produtos" className="px-4 py-8 scroll-mt-20">
      <div className="text-center mb-5">
        <p className="text-brand text-[11px] font-bold tracking-[0.3em] uppercase">Em Alta</p>
        <h2 className="font-display text-2xl font-bold uppercase">Trending Now</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveCategory(f as any)}
            className={`shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 transition ${
              activeCategory === f
                ? "bg-brand border-brand text-brand-foreground"
                : "border-border text-muted-foreground hover:border-brand hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      {items.length === 0 ? (
        <p className="text-center text-muted-foreground py-10">Sem produtos nesta categoria.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
