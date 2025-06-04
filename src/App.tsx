import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./Component/Footer";
import useFetch from "./CustomHooks/useFetch";
import Contact from "./Page/Contact";
import AddedCart from "./Page/AddedCart";
import apiContext from "./CustomHooks/createContext";
import type { detailsOfProduct } from "./CustomHooks/createContext";
import { useState } from "react";
// import type { WishListBoolean } from "./CustomHooks/createContext";
import type { wishListPlusCount } from "./CustomHooks/createContext";
function App() {
  const { product, loading } = useFetch("https://fakestoreapi.com/products");
  const [duplicateArray, setDuplicateArray] = useState<detailsOfProduct[]>(
    () => {
      const save = localStorage.getItem("product");
      return save ? JSON.parse(save) : [];
    }
  );

  const handleRetrive = (id: number) => {
    const productCheck = product.find((product) => product.id === id);
    if (!productCheck) return;

    setDuplicateArray((prev) => {
      const alreadyExist = prev.some(
        (product) => product.id === productCheck.id
      );
      if (alreadyExist) return prev;
      const updated = [...prev, productCheck];
      localStorage.setItem("product", JSON.stringify(updated));
      return updated;
    });
  };

  ///////////
  //   export interface wishListPlusCount {
  //   wishLitter: detailsOfProduct[];
  //   count: number;
  // }

  const [wishList, setWishList] = useState<wishListPlusCount>(() => {
    const storeArray = localStorage.getItem("wishList");
    return storeArray ? JSON.parse(storeArray) : { wishLitter: [], count: 0 };
  });
  const [wishListId, setWishListId] = useState<{ id: number }>({
    id: 0,
  });
  // const wishCount: { [key: string]: number } = {
  //   increment: 0,
  // };
  const handleWishList = (id: number) => {
    const checkWishList = product.find((wishProduct) => wishProduct.id === id);
    if (!checkWishList) return;

    setWishList((prev) => {
      const check = prev.wishLitter.find(
        (product) => product.id === checkWishList.id
      );
      if (check) {
        return prev;
      }
      const setter = {
        ...prev,
        wishLitter: [checkWishList],
        count: prev.count + 1,
      };

      localStorage.setItem("wishList", JSON.stringify(setter));
      return setter;
    });
    setWishListId((prev) => ({ ...prev, [id]: checkWishList.id }));
  };

  console.log(wishList);
  return (
    <BrowserRouter>
      <Header />
      <apiContext.Provider
        value={{
          products: product,
          loading,
          duplicateArray,
          handleRetrive,
          wishList: wishList,
          handleWishList,
          wishListId,
        }}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<AddedCart />} />
        </Routes>
      </apiContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
