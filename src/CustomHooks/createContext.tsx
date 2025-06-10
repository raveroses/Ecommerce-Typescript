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
export interface wishListPlusCount {
  wishLitter: detailsOfProduct[];
  count: number;
}
export interface UseFetchResult {
  products: detailsOfProduct[];
  loading: boolean;
  handleRetrive: (id: number) => void;
  duplicateArray: detailsOfProduct[];
  wishList: wishListPlusCount;
  handleWishList: (id: number) => void;
  wishListId: { [key: string]: number };
  category: string[];
  handleCategory: (categoryId: string) => void;
  cate: detailsOfProduct[];
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmission: (e: React.FormEvent<HTMLFormElement>) => void;
  inputText: string;
}

const apiContext = React.createContext<UseFetchResult | null>(null);
export default apiContext;
