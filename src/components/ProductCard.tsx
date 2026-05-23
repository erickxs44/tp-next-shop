import { useStore } from "@/contexts/StoreContext";
import { formatBRL, type Product } from "@/lib/products";
import { ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { setQuickView } = useStore();
  return (
    <article className="bg-card border border-border overflow-hidden flex flex-col">
      <button
        onClick={() => setQuickView(product)}
        className="relative aspect-square overflow-hidden"
        aria-label={`Ver ${product.name}`}
      >
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
      </button>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold leading-tight line-clamp-2 mb-1">{product.name}</h3>
        <p className="text-brand font-bold mb-3">{formatBRL(product.price)}</p>
        <button
          onClick={() => setQuickView(product)}
          className="btn-brand mt-auto w-full !py-2 !text-xs"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Adicionar
        </button>
      </div>
    </article>
  );
}
