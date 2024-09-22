"use client";
import { useEffect, useState } from "react";
import ProductsTable from "./table";
import { CircularProgress } from "@mui/material";
import { findProducts } from "@/requests/product-requests";
import { Product } from "@/@types/products";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetCars = async () => {
    setLoading(true);
    const products = await findProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full items-center p-4">
      <h2>Product Management</h2>
      <div className="w-3/4 pt-4">
        {loading && <CircularProgress className="absolute z-10 ml-80 mt-36" />}
        <ProductsTable data={products} />
      </div>
    </div>
  );
}
