import { Search } from "./search";
import { Products } from "./products";

export const ProductsWrapper = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>Products</h1>
        <Search />
      </div>

      <Products />
    </div>
  );
};
