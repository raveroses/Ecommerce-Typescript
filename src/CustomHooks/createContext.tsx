import type { Session } from "@supabase/supabase-js";
import React from "react";
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
  modal: boolean;
  handleModal: () => void;
  user: Record<string, string>;
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmissions: (e: React.FormEvent<HTMLFormElement>) => void;
  signingWithAuth: () => void;
  popUpData: Record<string, unknown>;
  userLogin: Record<string, string>;
  handleSignInOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignSubmission: (e: React.FormEvent<HTMLFormElement>) => void;
  userSession: Session | null;
  handlePasswordRequest: () => void;
  handleUpdatePassword: (e: React.FormEvent<HTMLFormElement>) => void;
  handleResetPasswordOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetPassword: string;
  handleLogOut: () => void;
  profileModal: boolean;
  handleProfileModal: () => void;
  handleProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  triggerFileSelect: () => void;
  imageUrl: { [key: string]: string };
}

const apiContext = React.createContext<UseFetchResult | null>(null);
export default apiContext;
