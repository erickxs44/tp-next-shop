import { createFileRoute } from "@tanstack/react-router";
import { StoreProvider } from "@/contexts/StoreContext";
import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { MarketingBlocks } from "@/components/MarketingBlocks";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Footer } from "@/components/Footer";
import { QuickView } from "@/components/QuickView";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TP Multimarcas — Surf & Griffe Premium" },
      { name: "description", content: "Tênis, camisas, jaquetas e acessórios premium. Curadoria streetwear e griffes selecionadas. Finalize via WhatsApp." },
      { property: "og:title", content: "TP Multimarcas — Surf & Griffe Premium" },
      { property: "og:description", content: "A nova experiência premium da TP. Tênis, streetwear e griffes selecionadas." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Categories />
          <ProductGrid />
          <MarketingBlocks />
          <InstagramGallery />
        </main>
        <Footer />
        <SideMenu />
        <CartDrawer />
        <QuickView />
      </div>
    </StoreProvider>
  );
}
