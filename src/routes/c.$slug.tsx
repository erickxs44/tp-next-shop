import { useMemo } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PRODUCTS, categoryFromSlug, categorySlug, CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { StoreProvider } from "@/contexts/StoreContext";
import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { Footer } from "@/components/Footer";
import { QuickView } from "@/components/QuickView";
import { CartDrawer } from "@/components/CartDrawer";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/c/$slug")({
  loader: ({ params }) => {
    const cat = categoryFromSlug(params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category ?? "Categoria"} — TP Store` },
      { name: "description", content: `Confira nossa seleção de ${loaderData?.category ?? "produtos"} premium na TP Store. Finalize via WhatsApp.` },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-center p-6">
      <div>
        <h1 className="font-display text-2xl mb-3">Categoria não encontrada</h1>
        <Link to="/" className="btn-brand">Voltar</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-center p-6">
      <div>
        <h1 className="font-display text-2xl mb-3">Algo deu errado</h1>
        <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
        <Link to="/" className="btn-brand">Voltar</Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = useMemo(() => PRODUCTS.filter((p) => p.category === category), [category]);

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <nav className="px-4 py-3 text-xs flex items-center gap-1 text-muted-foreground bg-mesh">
            <Link to="/" className="hover:text-brand uppercase tracking-wider">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground uppercase tracking-wider">{category}</span>
          </nav>

          <section className="px-4 py-6 bg-mesh bg-mesh-pulse">
            <p className="text-brand text-[11px] font-bold tracking-[0.3em] uppercase mb-1">Categoria</p>
            <h1 className="font-display text-3xl font-bold uppercase mb-4">{category}</h1>

            <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
              {CATEGORIES.map((c) => {
                const active = c.name === category;
                return (
                  <Link
                    key={c.name}
                    to="/c/$slug"
                    params={{ slug: categorySlug(c.name) }}
                    className={`shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 transition ${
                      active
                        ? "bg-brand border-brand text-brand-foreground"
                        : "border-border text-muted-foreground hover:border-brand hover:text-foreground"
                    }`}
                  >
                    {c.name}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="px-4 py-6">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">Sem produtos nesta categoria.</p>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {items.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </section>
        </main>
        <Footer />
        <SideMenu />
        <CartDrawer />
        <QuickView />
      </div>
    </StoreProvider>
  );
}
