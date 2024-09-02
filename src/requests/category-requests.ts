import { Category } from "@/@types/categories";

export const findCategories = async () => {
  let data = await fetch("http://localhost:3001/product-categories");
  let categories: Category[] = await data.json();
  console.log(categories);
  return categories;
};
