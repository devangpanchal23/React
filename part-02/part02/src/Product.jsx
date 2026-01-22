import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <h2>Title: {props.title}</h2>
      <h3>Price: ₹{props.price}</h3>
    </div>
  );
}