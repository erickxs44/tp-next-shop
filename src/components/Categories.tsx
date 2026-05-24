import { Link } from "@tanstack/react-router";
import { CATEGORIES, categorySlug } from "@/lib/products";

export function Categories() {
  return (
    <section id="explore" className="relative px-4 py-10 bg-mesh bg-mesh-pulse scroll-mt-16">
      <div className="text-center mb-6">
        <p className="text-brand text-[11px] font-bold tracking-[0.3em] uppercase">Categorias</p>
        <h2 className="font-display text-2xl font-bold uppercase">Compre por Categoria</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 relative">
        {CATEGORIES.map((c, i) => (
          <Link
            key={c.name}
            to="/c/$slug"
            params={{ slug: categorySlug(c.name) }}
            className="stagger-item relative aspect-square overflow-hidden group geo-frame-rect block"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center">
              <p className="font-display text-base font-bold uppercase tracking-wider">{c.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
