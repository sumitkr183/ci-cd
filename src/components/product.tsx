import type { IProduct } from "../hooks/useProducts";

export const Product = ({ title, price, description, thumbnail }: IProduct) => {
  return (
    <div style={{ border: "1px solid", padding: "10px", borderRadius: "10px" }}>
      <div style={{ background: "rgba(0,0,0,.3)", borderRadius: "10px" }}>
        <img src={thumbnail} alt={title} style={{ width: "100%" }} />
      </div>
      <h2>${price}</h2>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
