import { useEffect, useState } from "react";

const FETCH_PRODUCTS = "https://dummyjson.com/products";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
}

export const useGetProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(FETCH_PRODUCTS);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isError: error,
    isPending,
  };
};
