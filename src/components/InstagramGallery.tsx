import { Instagram } from "lucide-react";
import hoodies from "@/assets/cat-hoodies.jpg";
import tshirts from "@/assets/cat-tshirts.jpg";
import pants from "@/assets/cat-pants.jpg";
import jackets from "@/assets/cat-jackets.jpg";
import sneakers from "@/assets/cat-sneakers.jpg";
import acessorios from "@/assets/cat-acessorios.jpg";

const imgs = [hoodies, tshirts, pants, jackets, sneakers, acessorios];

export function InstagramGallery() {
  return (
    <section className="bg-card py-8 border-y border-border">
      <div className="px-4 mb-4 flex items-center gap-3">
        <Instagram className="w-5 h-5 text-brand" />
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Siga-nos</p>
          <p className="font-display text-lg font-bold">@tp.multimarcas</p>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {imgs.map((src, i) => (
          <a key={i} href="#" className="shrink-0 w-32 h-32 overflow-hidden">
            <img src={src} alt={`Post ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </section>
  );
}
