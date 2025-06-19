import Header from "./Component/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import React from "react";
import ScrollToTop from "./Component/ScrollToTop";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

type UserType = {
  userName: string;
  contact: string;
  password: string;
};
function App() {
  const navigate = useNavigate();
  const { product, loading } = useFetch("https://fakestoreapi.com/products");
  const [acctCreationData, setAccountCreationData] = useState(() => {
    try {
      const stored = localStorage.getItem("acctData");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
      return {};
    }
  });

  const [popUpData, setPopUpData] = useState(() => {
    try {
      const stored = localStorage.getItem("popUpData");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
      return {};
    }
  });
  const [duplicateArray, setDuplicateArray] = useState<detailsOfProduct[]>(
    () => {
      const save = localStorage.getItem("product");
      return save ? JSON.parse(save) : [];
    }
  );

  const handleRetrive = (id: number) => {
    if (
      Object.keys(acctCreationData).length > 0 ||
      Object.keys(popUpData).length > 0
    ) {
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
      navigate("/cart");
    } else {
      navigate("/signup");
      return;
    }
  };

  const [wishLists, setWishLists] = useState<wishListPlusCount>(() => {
    const storeArray = localStorage.getItem("wishList");
    return storeArray ? JSON.parse(storeArray) : { wishLitter: [], count: 0 };
  });
  const [wishListId, setWishListId] = useState<{ id: number }>({
    id: 0,
  });

  const handleWishList = (id: number) => {
    if (
      Object.keys(popUpData).length > 0 ||
      Object.keys(acctCreationData).length > 0
    ) {
      const checkWishList = product.find(
        (wishProduct) => wishProduct.id === id
      );
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
      setWishListId((prev) => ({ ...prev, [id]: checkWishList.id }));
      navigate("/wishListPage");
    } else {
      navigate("/signup");
      return;
    }

    toast.success("You added your wished product successfully");
  };
  console.log(Object.keys(popUpData).length > 0);
  console.log(Object.keys(acctCreationData).length > 0);
  console.log(acctCreationData);
  console.log(acctCreationData);
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

    setCate(searchCheck);
    setInputText("");
  };

  console.log(inputText);
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };

  // AUTHENTICATION PAGES

  const [user, setUser] = useState<UserType>(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored
        ? JSON.parse(stored)
        : {
            userName: "",
            contact: "",
            password: "",
          };
    } catch (e) {
      console.log("Invalid passage", e);
      return {
        userName: "",
        contact: "",
        password: "",
      };
    }
  });
  const handleValidation = () => {
    const isPhone = /^(?:\+?234|0)\d{10}$/;
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/;

    if (!user.userName.trim() || !user.password.trim()) return false;

    const contactConversion = String(user.contact).trim();
    const contactValidation =
      isPhone.test(contactConversion) || isEmail.test(contactConversion);
    if (!contactValidation) {
      toast.error("Please enter valid mail or Number (+234 or (0))");
      return;
    }
    return true;
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => {
      const userUpdate = { ...prev, [name]: value };
      localStorage.setItem("user", JSON.stringify(userUpdate));
      return userUpdate;
    });
  };

  const handleFormSubmissions = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const isValid = handleValidation();
      if (isValid) {
        const { data, error } = await supabase.auth.signUp({
          email: user.contact,
          password: user.password,
        });

        setAccountCreationData(data);
        localStorage.setItem("acctData", JSON.stringify(data));

        navigate("/");
      } else {
        toast("Please fill all the fields");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  const signingWithAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setPopUpData(data);
    localStorage.setItem("popUpData", JSON.stringify(data));

    navigate("/");
    console.log(data, error);
  };
  return (
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
        inputText,
        handleSearch,
        handleFormSubmission,
        modal,
        handleModal,
        user,
        handleOnchange,
        handleFormSubmissions,
        signingWithAuth,
        acctCreationData,
        popUpData,
      }}
    >
      <Header />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<AddedCart />} />
        <Route path="wishListPage" element={<WishListPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </apiContext.Provider>
  );
}

export default App;
