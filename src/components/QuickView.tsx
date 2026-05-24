import { useEffect, useState } from "react";
import { X, Check, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [qty, setQty] = useState<number>(1);
  const [photo, setPhoto] = useState<number>(0);

  useEffect(() => {
    setSize("");
    setColor("");
    setQty(1);
    setPhoto(0);
  }, [quickView?.id]);

  if (!quickView) return null;

  const canAdd = !!size && !!color;

  const confirm = () => {
    if (!canAdd) return;
    addToCart(quickView, size, color, qty);
    setQuickView(null);
    setTimeout(() => setCartOpen(true), 200);
  };

  const photos = quickView.images;
  const prev = () => setPhoto((p) => (p === 0 ? photos.length - 1 : p - 1));
  const next = () => setPhoto((p) => (p === photos.length - 1 ? 0 : p + 1));

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div onClick={() => setQuickView(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative w-full sm:max-w-md bg-card border-t-2 sm:border-2 border-brand max-h-[92vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
        <button onClick={() => setQuickView(null)} className="absolute top-3 right-3 z-10 p-2 bg-background/80 rounded-full" aria-label="Fechar">
          <X className="w-4 h-4" />
        </button>

        {/* Carousel */}
        <div className="relative">
          <img src={photos[photo]} alt={`${quickView.name} foto ${photo + 1}`} className="w-full aspect-square object-cover" />
          {photos.length > 1 && (
            <>
              <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Próxima" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full">
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhoto(i)}
                    aria-label={`Foto ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === photo ? "w-6 bg-brand" : "w-1.5 bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-5 space-y-5">
          <div>
            <p className="text-[10px] text-brand font-bold tracking-widest uppercase mb-1">{quickView.category}</p>
            <h3 className="font-display text-xl font-bold uppercase mb-2">{quickView.name}</h3>
            <p className="text-2xl font-bold text-brand">{formatBRL(quickView.price)}</p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{quickView.description}</p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-2">
              Tamanho {size && <span className="text-brand">• {size}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              {quickView.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-12 px-3 py-2 text-sm font-bold border-2 transition rounded-full ${
                    size === s ? "bg-brand border-brand text-brand-foreground red-glow" : "border-border hover:border-brand"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-2">
              Cor {color && <span className="text-brand">• {color}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              {quickView.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${
                    color === c ? "border-brand red-glow scale-110" : "border-border"
                  }`}
                  style={{ background: COLOR_MAP[c] || "#666" }}
                  aria-label={c}
                >
                  {color === c && <Check className="w-4 h-4" style={{ color: c === "Branco" ? "#000" : "#fff" }} />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-2">Quantidade</p>
            <div className="inline-flex items-center border-2 border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2 hover:bg-secondary" aria-label="Diminuir">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-base font-bold min-w-12 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-2 hover:bg-secondary" aria-label="Aumentar">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button onClick={confirm} disabled={!canAdd} className="btn-brand w-full !py-4">
            {canAdd ? `Adicionar — ${formatBRL(quickView.price * qty)}` : "Selecione tamanho e cor"}
          </button>
        </div>
      </div>
    </div>
  );
}
