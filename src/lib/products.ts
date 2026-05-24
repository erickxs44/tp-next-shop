import hoodies from "@/assets/cat-hoodies.jpg";
import tshirts from "@/assets/cat-tshirts.jpg";
import pants from "@/assets/cat-pants.jpg";
import jackets from "@/assets/cat-jackets.jpg";
import sneakers from "@/assets/cat-sneakers.jpg";
import acessorios from "@/assets/cat-acessorios.jpg";

export type Category = "Tênis" | "Camisas" | "Calças" | "Jaquetas" | "Acessórios" | "Moletons";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
}

export const CATEGORIES: { name: Category; image: string }[] = [
  { name: "Tênis", image: sneakers },
  { name: "Camisas", image: tshirts },
  { name: "Calças", image: pants },
  { name: "Jaquetas", image: jackets },
  { name: "Acessórios", image: acessorios },
  { name: "Moletons", image: hoodies },
];

const SLUG_MAP: Record<Category, string> = {
  "Tênis": "tenis",
  "Camisas": "camisas",
  "Calças": "calcas",
  "Jaquetas": "jaquetas",
  "Acessórios": "acessorios",
  "Moletons": "moletons",
};
export const categorySlug = (c: Category) => SLUG_MAP[c];
export const categoryFromSlug = (slug: string): Category | null => {
  const entry = (Object.entries(SLUG_MAP) as [Category, string][]).find(([, s]) => s === slug);
  return entry ? entry[0] : null;
};

const desc = (name: string) =>
  `${name} da curadoria TP Store. Peça premium, corte moderno e acabamento de alta qualidade — pensada para o street-style de luxo. Entrega para todo o Brasil e pagamento combinado via WhatsApp.`;

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Tênis TP Red Edition", price: 899, category: "Tênis", image: sneakers, images: [sneakers, jackets, hoodies], description: desc("Tênis TP Red Edition"), sizes: ["38","39","40","41","42","43"], colors: ["Preto","Vermelho"] },
  { id: "p2", name: "Camisa Oversized TP", price: 159, category: "Camisas", image: tshirts, images: [tshirts, hoodies, jackets], description: desc("Camisa Oversized TP"), sizes: ["P","M","G","GG"], colors: ["Preto","Branco","Vermelho"] },
  { id: "p3", name: "Calça Cargo Premium", price: 249, category: "Calças", image: pants, images: [pants, jackets, sneakers], description: desc("Calça Cargo Premium"), sizes: ["38","40","42","44","46"], colors: ["Preto"] },
  { id: "p4", name: "Jaqueta Bomber TP", price: 459, category: "Jaquetas", image: jackets, images: [jackets, hoodies, tshirts], description: desc("Jaqueta Bomber TP"), sizes: ["P","M","G","GG"], colors: ["Preto","Vermelho"] },
  { id: "p5", name: "Boné Trucker Shield", price: 119, category: "Acessórios", image: acessorios, images: [acessorios, jackets, tshirts], description: desc("Boné Trucker Shield"), sizes: ["Único"], colors: ["Preto"] },
  { id: "p6", name: "Moletom Shield Premium", price: 289, category: "Moletons", image: hoodies, images: [hoodies, jackets, sneakers], description: desc("Moletom Shield Premium"), sizes: ["P","M","G","GG"], colors: ["Preto","Vermelho"] },
  { id: "p7", name: "Tênis TP Street Low", price: 749, category: "Tênis", image: sneakers, images: [sneakers, pants, jackets], description: desc("Tênis TP Street Low"), sizes: ["38","39","40","41","42"], colors: ["Preto"] },
  { id: "p8", name: "Camisa Griffe Logo", price: 139, category: "Camisas", image: tshirts, images: [tshirts, hoodies, acessorios], description: desc("Camisa Griffe Logo"), sizes: ["P","M","G","GG"], colors: ["Preto","Branco"] },
];

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
