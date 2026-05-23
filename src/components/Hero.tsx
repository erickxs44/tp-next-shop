import hero from "@/assets/hero-tp.jpg";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const scrollTo = () => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative overflow-hidden bg-mesh">
      <div className="relative">
        <img src={hero} alt="TP Multimarcas - Nova coleção premium" className="w-full h-auto object-cover" width={1080} height={1920} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-center">
          <p className="text-brand text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Nova Coleção</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[0.95] mb-2">
            SEJA<br/>BEM-VINDO!
          </h1>
          <p className="text-sm text-foreground/80 mb-4 max-w-xs mx-auto">
            A nova experiência <span className="text-brand font-bold">PREMIUM</span> da TP.
          </p>
          <button onClick={scrollTo} className="btn-brand">
            Confira já! <ChevronRight className="w-4 h-4" />
          </button>
          <div className="mt-4 inline-block geo-frame-rect px-4 py-2">
            <p className="text-xs">
              Cupom: <span className="font-bold text-brand">TPBEMVINDO</span> • 10% OFF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
