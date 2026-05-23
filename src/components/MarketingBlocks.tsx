import hoodies from "@/assets/cat-hoodies.jpg";
import jackets from "@/assets/cat-jackets.jpg";
import sneakers from "@/assets/cat-sneakers.jpg";

const blocks = [
  { title: "Novos Drops", sub: "Toda Semana", cta: "Explorar", img: hoodies },
  { title: "Premium Griffes", sub: "Selecionados a dedo", cta: "Explorar", img: jackets },
  { title: "Até 50% OFF", sub: "Por tempo limitado", cta: "Ver ofertas", img: sneakers },
];

export function MarketingBlocks() {
  const scrollTo = () => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="px-4 py-8 space-y-3">
      {blocks.map((b) => (
        <article key={b.title} className="relative h-40 overflow-hidden geo-frame-rect">
          <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="relative h-full flex flex-col justify-center p-5">
            <p className="text-[10px] text-brand font-bold tracking-widest uppercase">{b.sub}</p>
            <h3 className="font-display text-2xl font-bold uppercase mb-3">{b.title}</h3>
            <button onClick={scrollTo} className="btn-outline-brand self-start">{b.cta}</button>
          </div>
        </article>
      ))}
    </section>
  );
}
