import React from "react";
// export interface productDetail {
//   [key: string]: string;
// }

// export interface ApiFetched {
//   products: productDetail[];
//   loading: boolean;
// }

export interface detailsOfProduct {
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
  handleRetrive: (id: number) => void;
  duplicateArray: detailsOfProduct[];
  wishList: detailsOfProduct[];
  wishListBool: boolean;
  handleWishList: (id: number) => void;
}

const apiContext = React.createContext<UseFetchResult | null>(null);
export default apiContext;
