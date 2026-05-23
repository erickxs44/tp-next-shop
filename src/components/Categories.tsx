import { CATEGORIES, type Category } from "@/lib/products";
import { useStore } from "@/contexts/StoreContext";

export function Categories() {
  const { setActiveCategory } = useStore();
  const pick = (c: Category) => {
    setActiveCategory(c);
    setTimeout(() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" }), 30);
  };
  return (
    <section className="px-4 py-8 bg-mesh">
      <div className="text-center mb-6">
        <p className="text-brand text-[11px] font-bold tracking-[0.3em] uppercase">Categorias</p>
        <h2 className="font-display text-2xl font-bold uppercase">Compre por Categoria</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c.name}
            onClick={() => pick(c.name)}
            className="relative aspect-square overflow-hidden group geo-frame-rect"
          >
            <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center">
              <p className="font-display text-sm font-bold uppercase tracking-wider mb-1">{c.name}</p>
              <span className="inline-block text-[10px] font-bold tracking-wider text-brand uppercase border-b border-brand">
                Comprar agora
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
