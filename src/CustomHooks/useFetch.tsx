import { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface detailsOfProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { [key: string]: number };
}
export interface UseFetchResult {
  products: detailsOfProduct[];
  loading: boolean;
}

const useFetch = (url: string): UseFetchResult => {
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
  }, []);

  return { products: product, loading };
};

export default useFetch;
