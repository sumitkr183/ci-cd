import { Product } from "./product";
import { useGetProducts } from "../hooks/useProducts";

export const Products = () => {
  const { data: products, isError, isPending } = useGetProducts();

  if (isError) return <h3>Unable to fetch products</h3>;
  if (isPending) return <h3>Products Loading...</h3>;

  return (
    <div
      style={{
        width: "100%",
        margin: "20px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
