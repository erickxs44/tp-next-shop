import { X } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { CATEGORIES, type Category } from "@/lib/products";
import { TPLogo } from "./TPLogo";

export function SideMenu() {
  const { menuOpen, setMenuOpen, setActiveCategory } = useStore();

  const go = (c: Category | "Todos") => {
    setActiveCategory(c);
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-mesh border-l-2 border-brand transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <TPLogo size={28} />
          <button onClick={() => setMenuOpen(false)} aria-label="Fechar" className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          <button
            onClick={() => go("Todos")}
            className="w-full text-left px-4 py-3 font-display text-lg tracking-wider uppercase hover:bg-brand hover:text-brand-foreground transition border-l-2 border-transparent hover:border-brand"
          >
            Todos os produtos
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.name}
              onClick={() => go(c.name)}
              className="w-full text-left px-4 py-3 font-display text-lg tracking-wider uppercase hover:bg-brand hover:text-brand-foreground transition border-l-2 border-transparent hover:border-brand"
            >
              {c.name}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <p className="text-xs text-muted-foreground">Atendimento via WhatsApp</p>
          <p className="text-sm font-semibold text-brand">(11) 99999-9999</p>
        </div>
      </aside>
    </>
  );
}
