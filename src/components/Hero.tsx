import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-tp.jpg";
import { ChevronRight } from "lucide-react";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = rect.height || 1;
      // 0 = top of hero at viewport top, 1 = scrolled past
      const p = Math.min(Math.max(-rect.top / h, 0), 1);
      raf = requestAnimationFrame(() => setT(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const scrollTo = () => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });

  const scale = 1 - t * 0.12;
  const opacity = 1 - t * 0.7;
  const translate = t * -40;

  return (
    <section ref={ref} className="relative overflow-hidden bg-mesh bg-mesh-pulse">
      <Particles count={28} />
      <div
        className="relative will-change-transform"
        style={{
          transform: `scale(${scale}) translateY(${translate}px)`,
          opacity,
          transition: "transform 0.05s linear, opacity 0.1s linear",
          transformOrigin: "50% 30%",
        }}
      >
        <img
          src={hero}
          alt="TP Store — Coleção streetwear premium"
          className="w-full h-auto object-cover"
          width={1080}
          height={1920}
          fetchPriority="high"
        />
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
