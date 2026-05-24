import hoodies from "@/assets/cat-hoodies.jpg";
import jackets from "@/assets/cat-jackets.jpg";
import sneakers from "@/assets/cat-sneakers.jpg";
import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const blocks = [
  { title: "Novos Drops", sub: "Toda Semana", cta: "Explorar", img: hoodies, to: "/c/$slug", slug: "moletons" },
  { title: "Premium Griffes", sub: "Selecionados a dedo", cta: "Explorar", img: jackets, to: "/c/$slug", slug: "jaquetas" },
  { title: "Até 50% OFF", sub: "Por tempo limitado", cta: "Ver ofertas", img: sneakers, to: "/c/$slug", slug: "tenis" },
] as const;

function Block({ b, i }: { b: typeof blocks[number]; i: number }) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal relative h-40 overflow-hidden geo-frame-rect"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="relative h-full flex flex-col justify-center p-5">
        <p className="text-[10px] text-brand font-bold tracking-widest uppercase">{b.sub}</p>
        <h3 className="font-display text-2xl font-bold uppercase mb-3">{b.title}</h3>
        <Link to={b.to} params={{ slug: b.slug }} className="btn-outline-brand self-start">
          {b.cta}
        </Link>
      </div>
    </article>
  );
}

export function MarketingBlocks() {
  return (
    <section className="px-4 py-8 space-y-3 bg-mesh bg-mesh-pulse">
      {blocks.map((b, i) => <Block key={b.title} b={b} i={i} />)}
    </section>
  );
}
