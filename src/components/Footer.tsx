import { Instagram, MessageCircle, Music2 } from "lucide-react";
import { TPLogo } from "./TPLogo";

export function Footer() {
  return (
    <footer className="bg-mesh border-t-2 border-brand pt-8 pb-6 px-4">
      <div className="mb-6"><TPLogo size={36} /></div>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm">
        Multimarcas premium. Surf, streetwear e griffes selecionadas com curadoria para o seu estilo.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3 text-brand">Loja</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Tênis</li><li>Camisas</li><li>Calças</li><li>Jaquetas</li><li>Acessórios</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3 text-brand">Ajuda</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FAQ</li><li>Trocas</li><li>Entregas</li><li>Contato</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="#" aria-label="Instagram" className="w-10 h-10 border border-brand flex items-center justify-center hover:bg-brand transition"><Instagram className="w-4 h-4"/></a>
        <a href="#" aria-label="TikTok" className="w-10 h-10 border border-brand flex items-center justify-center hover:bg-brand transition"><Music2 className="w-4 h-4"/></a>
        <a href="https://wa.me/5511999999999" aria-label="WhatsApp" className="w-10 h-10 border border-brand flex items-center justify-center hover:bg-brand transition"><MessageCircle className="w-4 h-4"/></a>
      </div>

      <div className="border-t border-border pt-4 text-[11px] text-muted-foreground text-center">
        © {new Date().getFullYear()} TP Multimarcas — Surf &amp; Griffe. Todos os direitos reservados.
      </div>
    </footer>
  );
}
