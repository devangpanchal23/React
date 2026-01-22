import "./ProductCard.css";

function ProductCard({ title, description, oldPrice, newPrice }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{title}</h3>

      <ul className="product-desc">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="product-price">
        <span className="old-price">₹{oldPrice}</span>
        <span className="new-price">₹{newPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;