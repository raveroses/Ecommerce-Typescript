// context.js
import React from "react";
interface detailsOfProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { [key: string]: number };
}
interface UseFetchResult {
  products: detailsOfProduct[];
  loading: boolean;
}

const MyContext = React.createContext<UseFetchResult | null>(null);

export default MyContext;
