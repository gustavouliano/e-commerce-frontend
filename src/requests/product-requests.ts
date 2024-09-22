import { Category } from "@/@types/categories";
import { Product } from "@/@types/products";

export const findProducts = async () => {
  let data = await fetch("http://localhost:3000/products");
  let products: Product[] = await data.json();
  return products;
};
