import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { formatBRL } from "@/lib/products";

const WHATSAPP_NUMBER = "5511999999999";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal, clearCart } = useStore();

  const checkout = () => {
    if (cart.length === 0) return;
    const lines = cart.map(
      (i, idx) =>
        `${idx + 1}. ${i.product.name} — Tam: ${i.size} | Cor: ${i.color} | Qtd: ${i.qty} | ${formatBRL(i.product.price * i.qty)}`
    );
    const msg =
      `Olá TP Multimarcas! 👋\n\nGostaria de finalizar a compra dos seguintes itens:\n\n${lines.join("\n")}\n\n*Total: ${formatBRL(cartTotal)}*\n\nAguardo para combinar pagamento e envio.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[92%] max-w-md bg-background border-l-2 border-brand transition-transform duration-300 flex flex-col ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-lg font-bold uppercase tracking-wider">Seu Carrinho</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Fechar" className="p-2"><X className="w-5 h-5"/></button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">Seu carrinho está vazio.</p>
              <button onClick={() => setCartOpen(false)} className="btn-outline-brand">Continuar comprando</button>
            </div>
          ) : (
            <ul className="space-y-3">
              {cart.map((i) => (
                <li key={i.id} className="flex gap-3 bg-card p-3 border border-border">
                  <img src={i.product.image} alt={i.product.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold line-clamp-1">{i.product.name}</h4>
                    <p className="text-xs text-muted-foreground">Tam: {i.size} • Cor: {i.color}</p>
                    <p className="text-sm font-bold text-brand mt-1">{formatBRL(i.product.price * i.qty)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button onClick={() => updateQty(i.id, i.qty - 1)} className="p-1.5 hover:bg-secondary" aria-label="Diminuir"><Minus className="w-3 h-3"/></button>
                        <span className="px-3 text-sm font-bold">{i.qty}</span>
                        <button onClick={() => updateQty(i.id, i.qty + 1)} className="p-1.5 hover:bg-secondary" aria-label="Aumentar"><Plus className="w-3 h-3"/></button>
                      </div>
                      <button onClick={() => removeFromCart(i.id)} className="text-muted-foreground hover:text-brand p-1" aria-label="Remover"><Trash2 className="w-4 h-4"/></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">{formatBRL(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-display font-bold uppercase">Total</span>
              <span className="font-bold text-brand">{formatBRL(cartTotal)}</span>
            </div>
            <button onClick={checkout} className="btn-brand w-full !py-4">
              Finalizar via WhatsApp
            </button>
            <button onClick={clearCart} className="w-full text-xs text-muted-foreground hover:text-brand uppercase tracking-wider">
              Limpar carrinho
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
