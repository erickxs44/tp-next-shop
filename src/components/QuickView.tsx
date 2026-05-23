import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { formatBRL } from "@/lib/products";

const COLOR_MAP: Record<string, string> = {
  "Preto": "#0a0a0a",
  "Branco": "#f5f5f5",
  "Vermelho": "#dc2626",
};

export function QuickView() {
  const { quickView, setQuickView, addToCart, setCartOpen } = useStore();
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (quickView) {
      setSize(quickView.sizes[0]);
      setColor(quickView.colors[0]);
    }
  }, [quickView]);

  if (!quickView) return null;

  const confirm = () => {
    addToCart(quickView, size, color);
    setQuickView(null);
    setTimeout(() => setCartOpen(true), 150);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div onClick={() => setQuickView(null)} className="absolute inset-0 bg-black/80" />
      <div className="relative w-full sm:max-w-md bg-card border-t-2 sm:border-2 border-brand max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
        <button onClick={() => setQuickView(null)} className="absolute top-3 right-3 z-10 p-2 bg-background/80 rounded-full" aria-label="Fechar">
          <X className="w-4 h-4" />
        </button>
        <img src={quickView.image} alt={quickView.name} className="w-full aspect-square object-cover" />
        <div className="p-5 space-y-5">
          <div>
            <p className="text-[10px] text-brand font-bold tracking-widest uppercase mb-1">{quickView.category}</p>
            <h3 className="font-display text-xl font-bold uppercase mb-2">{quickView.name}</h3>
            <p className="text-2xl font-bold text-brand">{formatBRL(quickView.price)}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-2">Tamanho</p>
            <div className="flex flex-wrap gap-2">
              {quickView.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-12 px-3 py-2 text-sm font-bold border-2 transition ${
                    size === s ? "bg-brand border-brand text-brand-foreground" : "border-border hover:border-brand"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-2">Cor: <span className="text-brand">{color}</span></p>
            <div className="flex flex-wrap gap-2">
              {quickView.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${
                    color === c ? "border-brand red-glow" : "border-border"
                  }`}
                  style={{ background: COLOR_MAP[c] || "#666" }}
                  aria-label={c}
                >
                  {color === c && <Check className="w-4 h-4" style={{ color: c === "Branco" ? "#000" : "#fff" }} />}
                </button>
              ))}
            </div>
          </div>

          <button onClick={confirm} className="btn-brand w-full !py-4">
            Confirmar e adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
