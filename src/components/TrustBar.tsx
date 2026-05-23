import { Truck, Award, RotateCcw, Headphones } from "lucide-react";

const items = [
  { Icon: Truck, t: "Frete Grátis", s: "Acima de R$ 299" },
  { Icon: Award, t: "Qualidade", s: "Produtos originais" },
  { Icon: RotateCcw, t: "Devoluções", s: "Até 7 dias" },
  { Icon: Headphones, t: "Suporte", s: "WhatsApp 24/7" },
];

export function TrustBar() {
  return (
    <section className="bg-card border-y border-border py-4">
      <div className="grid grid-cols-2 gap-3 px-4">
        {items.map(({ Icon, t, s }) => (
          <div key={t} className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 flex items-center justify-center border border-brand text-brand rounded-sm">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">{t}</p>
              <p className="text-[10px] text-muted-foreground">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
