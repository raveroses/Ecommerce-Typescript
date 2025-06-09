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
import WishListPage from "./Page/WishListPage";
import SignUp from "./Page/SignUp";
import type { wishListPlusCount } from "./CustomHooks/createContext";
import { toast } from "react-toastify";
import Login from "./Page/Logn";
import About from "./Page/About";
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
    toast.success("You added product to cart succefully");
  };

  const [wishLists, setWishLists] = useState<wishListPlusCount>(() => {
    const storeArray = localStorage.getItem("wishList");
    return storeArray ? JSON.parse(storeArray) : { wishLitter: [], count: 0 };
  });
  const [wishListId, setWishListId] = useState<{ id: number }>({
    id: 0,
  });

  const handleWishList = (id: number) => {
    const checkWishList = product.find((wishProduct) => wishProduct.id === id);
    if (!checkWishList) return;

    setWishLists((prev) => {
      const check = prev.wishLitter.find(
        (product) => product.id === checkWishList.id
      );
      if (check) {
        return prev;
      }
      const setter = {
        ...prev,
        wishLitter: [...prev.wishLitter, checkWishList],
        count: prev.count + 1,
      };

      localStorage.setItem("wishList", JSON.stringify(setter));
      return setter;
    });

    toast.success("You added your wished product successfully");

    setWishListId((prev) => ({ ...prev, [id]: checkWishList.id }));
  };

  type placeholders = string[];
  const category: placeholders = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [cate, setCate] = useState<detailsOfProduct[]>([]);
  const handleCategory = (categoryId: string) => {
    const checkCategory = product.filter((cat) => cat.category === categoryId);
    if (checkCategory) {
      setCate(checkCategory);
    }
  };

  const [searchValue, setSearchValue] = useState<detailsOfProduct[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText) return;

    const searchCheck = product.filter((prod) =>
      prod.title.toLowerCase().includes(inputText.toLowerCase())
    );

    if (searchCheck.length > 0) {
      setSearchValue(searchCheck);
    } else {
      toast.error("Invalid Search");
    }
    setInputText("");
  };

  console.log(searchValue);
  console.log(inputText);
  return (
    <BrowserRouter>
      <apiContext.Provider
        value={{
          products: product,
          loading,
          duplicateArray,
          handleRetrive,
          wishList: wishLists,
          handleWishList,
          wishListId,
          category,
          handleCategory,
          cate,
          searchValue,
          inputText,
          handleSearch,
          handleFormSubmission,
        }}
      >
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<AddedCart />} />
          <Route path="wishListPage" element={<WishListPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
        </Routes>
      </apiContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
