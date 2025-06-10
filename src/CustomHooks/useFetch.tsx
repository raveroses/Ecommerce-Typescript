import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { detailsOfProduct } from "./createContext";
const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<detailsOfProduct[]>([]);
  useEffect(() => {
    const handleFetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const datas = await response.json();
        setProduct(datas);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast(error.message);
        } else {
          toast("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    handleFetchProduct();
  }, [url]);
  return { product, loading };
};

export default useFetch;
