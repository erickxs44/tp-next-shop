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

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Tênis TP Red Edition", price: 899, category: "Tênis", image: sneakers, sizes: ["38","39","40","41","42","43"], colors: ["Preto","Vermelho"] },
  { id: "p2", name: "Camisa Oversized TP", price: 159, category: "Camisas", image: tshirts, sizes: ["P","M","G","GG"], colors: ["Preto","Branco","Vermelho"] },
  { id: "p3", name: "Calça Cargo Premium", price: 249, category: "Calças", image: pants, sizes: ["38","40","42","44","46"], colors: ["Preto"] },
  { id: "p4", name: "Jaqueta Bomber TP", price: 459, category: "Jaquetas", image: jackets, sizes: ["P","M","G","GG"], colors: ["Preto","Vermelho"] },
  { id: "p5", name: "Boné Trucker Shield", price: 119, category: "Acessórios", image: acessorios, sizes: ["Único"], colors: ["Preto"] },
  { id: "p6", name: "Moletom Shield Premium", price: 289, category: "Moletons", image: hoodies, sizes: ["P","M","G","GG"], colors: ["Preto","Vermelho"] },
  { id: "p7", name: "Tênis TP Street Low", price: 749, category: "Tênis", image: sneakers, sizes: ["38","39","40","41","42"], colors: ["Preto"] },
  { id: "p8", name: "Camisa Griffe Logo", price: 139, category: "Camisas", image: tshirts, sizes: ["P","M","G","GG"], colors: ["Preto","Branco"] },
];

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
