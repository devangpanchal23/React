import React from "react";
import Product from "./Product";

export default function ProductTab() {
  const products = [
    { title: "TV", price: 40000 },
    { title: "Laptop", price: 50000 },
    { title: "Mobile", price: 20000 },
    { title: "Tablet", price: 30000 }
  ];

  return (
    <>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
}