"use client";

import { Category } from "@/@types/categories";
import CategoryTable from "@/components/Category/Table";
import { findCategories } from "@/requests/category-requests";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Categorias() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categories = findCategories();
    categories.then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.titleContainer}>
        <h1>Categorias de Produto</h1>
        <p>Consulte, adicione e gerencie todas as categorias de produto</p>
      </span>
      <div className={styles.tableContainer}>
        <CategoryTable categories={categories} />
      </div>
    </div>
  );
}
