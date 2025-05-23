import { useState } from "react";
import { toast } from "react-toastify";
const useFetch = (value: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, (string | number)[]>>({});
  const handleFetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(value);
      const data = await response.json();
      setData(data);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, handleFetchProduct };
};

export default useFetch;
