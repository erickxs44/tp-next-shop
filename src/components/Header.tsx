import { MoreVertical, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/contexts/StoreContext";
import { TPLogo } from "./TPLogo";
import { Particles } from "./Particles";

export function Header() {
  const { setMenuOpen, setCartOpen, cartCount, bump } = useStore();
  const [shake, setShake] = useState(0);

  useEffect(() => {
    if (bump === 0) return;
    setShake((s) => s + 1);
  }, [bump]);

  return (
    <>
      <div className="bg-brand text-brand-foreground text-center py-2 text-[11px] font-semibold tracking-wider uppercase">
        Frete grátis acima de R$ 299 • Use o cupom TPBEMVINDO 10% OFF
      </div>
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border overflow-hidden">
        <Particles count={14} />
        <div className="relative flex items-center justify-between px-4 py-3">
          <TPLogo size={36} />
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Carrinho"
              className="relative p-2 rounded hover:bg-secondary transition"
            >
              <span key={shake} className={shake > 0 ? "inline-block cart-bump" : "inline-block"}>
                <ShoppingBag className="w-5 h-5" />
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand text-brand-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              className="p-2 rounded hover:bg-secondary transition"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
