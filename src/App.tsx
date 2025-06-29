import Header from "./Component/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./Component/Footer";
import useFetch from "./CustomHooks/useFetch";
import Contact from "./Page/Contact";
import AddedCart from "./Page/AddedCart";
import apiContext from "./CustomHooks/createContext";
import type { detailsOfProduct } from "./CustomHooks/createContext";
import { useState, useEffect, useRef } from "react";
import WishListPage from "./Page/WishListPage";
import SignUp from "./Page/SignUp";
import type { wishListPlusCount } from "./CustomHooks/createContext";
import Login from "./Page/Login";
import PasswordUpdate from "./Page/PasswordUpdate";
import About from "./Page/About";
import React from "react";
import ScrollToTop from "./Component/ScrollToTop";
import { Bounce, toast, ToastContainer } from "react-toastify";
import supabase from "./Component/Supabase";
import type { Session } from "@supabase/supabase-js";
type UserType = {
  userName: string;
  email: string;
  password: string;
};
function App() {
  const navigate = useNavigate();
  const { product, loading } = useFetch("https://fakestoreapi.com/products");
  const [userSession, setUserSession] = useState<Session | null>(() => {
    const stored = localStorage.getItem("get");
    return stored ? JSON.parse(stored) : null;
  });

  const [toastShown, setToastShown] = useState(false);
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
    if (userSession?.user.email && Object.keys(userSession).length > 0) {
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

      if (!toastShown) {
        setToastShown(true);
        toast.success("You added product to cart succefully", {
          onClose: () => {
            setToastShown(false);
          },
        });
      }
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
    if (userSession?.user.email && Object.keys(userSession).length > 0) {
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

      if (!toastShown) {
        setToastShown(true);
        toast.success("You added your wished product successfully", {
          onClose: () => {
            setToastShown(false);
          },
        });
      }
    } else {
      navigate("/signup");
      return;
    }
  };

  type placeholders = string[];
  const category: placeholders = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [cate, setCate] = useState<detailsOfProduct[]>([]);
  const handleCategory = (categoryId: string) => {
    const checkCategory = product.filter((cat) => cat.category === categoryId);
    if (checkCategory) {
      setCate(checkCategory);
    }
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
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
    setProfileModal(false);
  };
  const [click, setClick] = useState<string>("");
  const handleClickedSign = (item: string) => {
    setClick(item);
    setModal(false);
    setProfileModal(false);
  };

  const handleHeart = () => {
    setModal(false);
    setProfileModal(false);
  };

  // AUTHENTICATION PAGES
  ///////BEGINING OF SIGN UP
  const [user, setUser] = useState<UserType>(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored
        ? JSON.parse(stored)
        : {
            userName: "",
            email: "",
            password: "",
          };
    } catch (e) {
      console.log("Invalid passage", e);
      return {
        userName: "",
        email: "",
        password: "",
      };
    }
  });
  const handleValidation = () => {
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/;

    if (!user.userName.trim() || !user.password.trim()) return false;

    const contactConversion = user.email.trim();
    const contactValidation = isEmail.test(contactConversion);
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
  const [loadings, setLoadings] = useState(false);
  const handleFormSubmissions = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadings(true);
    try {
      const isValid = handleValidation();
      if (isValid) {
        const { data, error } = await supabase.auth.signUp({
          email: user.email,
          password: user.password,
        });
        console.log(data);
        if (error) {
          toast.error(String(error));
          console.log(error);
        }

        setUser({
          userName: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast("Please fill all the fields");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    } finally {
      setLoadings(false);
    }
  };

  /////////ENDING OF SIGN UP

  /////POP UP SIGN IN
  const signingWithAuth = async () => {
    setLoadings(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      setPopUpData(data);
      console.log(error);
      localStorage.setItem("popUpData", JSON.stringify(data));

      navigate("/");
    } catch (e) {
      console.log("Invaid signUp", e);
    } finally {
      setLoadings(false);
    }
  };

  ////////LOG IN SESSION
  const [userLogin, setUserLogin] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem("login");
      return stored ? JSON.parse(stored) : { email: "", password: "" };
    } catch (e) {
      console.log("Invalid Object", e);
    }
  });

  const handleSignInOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserLogin((prev) => {
      const updatter = { ...prev, [name]: value };
      localStorage.setItem("login", JSON.stringify(updatter));
      return updatter;
    });
  };
  console.log(userLogin);
  const handleSignSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sign in button clicked");
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!userLogin.password.trim() || !isEmail.test(userLogin.email.trim())) {
      toast.error("Please,revalidate your Input");
      return;
    }
    console.log(userLogin.password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userLogin.email,
      password: userLogin.password,
    });
    if (error) {
      toast.error(error.message);
      console.log(error.message);
      return;
    }
    if (!data.session) {
      toast.error("Invaid login credentials");
      return;
    }

    toast.success("Login successful");
    setUserLogin({
      email: "",
      password: "",
    });
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        return;
      }

      if (data.session) {
        setUserSession(data.session);
        localStorage.setItem("get", JSON.stringify(data.session));
      }
    };

    getUser();
  }, [user, popUpData, userLogin]);

  ///PASSWORD RESET REQUEST
  const [resetPassword, setResetPassword] = useState("");
  const handleResetPasswordOnchange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResetPassword(e.target.value);
  };
  const handlePasswordRequest = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      userLogin.email,
      {
        redirectTo: "https://shoppystore-lac.vercel.app/passwordUpdate",
      }
    );
    console.log(error);
    console.log(data);
    toast.info("Reset Password Link is sent to your mail");
    navigate("/login");
  };

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputTrim = resetPassword.trim();
    if (!inputTrim) {
      toast.error("Please,Input Password");
      return;
    }
    const { data, error } = await supabase.auth.updateUser({
      password: inputTrim,
    });
    if (error) {
      toast.error("Password update failed");
      console.log(error);
      return;
    }
    console.log(data);
    const loginPasswordGetter = localStorage.getItem("login");
    if (loginPasswordGetter) {
      const stringiFyConverter = JSON.parse(loginPasswordGetter);
      stringiFyConverter.password = inputTrim;
      localStorage.setItem("login", JSON.stringify(stringiFyConverter));
    }
    toast.success("Password Updated");
    setResetPassword("");
  };

  const [imageUrl, setImageUrl] = useState<{ urls: string }>(() => {
    try {
      const stored = localStorage.getItem("image");
      return stored ? JSON.parse(stored) : { urls: "" };
    } catch {
      return { urls: "" };
    }
  });
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
      return;
    }
    localStorage.clear();
    setImageUrl({ urls: "" });
    setUserLogin({ email: "" });
    toast.success("Log out successful");
  };
  const [profileModal, setProfileModal] = useState(false);
  const handleProfileModal = () => {
    console.log("modal clicked");
    setProfileModal((prev) => !prev);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleProfileImageChange = async () => {
    const file = inputRef?.current?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile");
    formData.append("cloud_name", "diptafc1s");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diptafc1s/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    const imageUrls = data.secure_url;
    setImageUrl({ urls: imageUrls });
    localStorage.setItem("image", JSON.stringify({ urls: imageUrls }));

    console.log("Image uploaded:", data.secure_url);
  };

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  const isUserLoggedIn = userSession?.user.email;
  if (loadings) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
        popUpData,
        userLogin,
        handleSignInOnchange,
        handleSignSubmission,
        userSession,
        handlePasswordRequest,
        handleUpdatePassword,
        handleResetPasswordOnchange,
        resetPassword,
        handleLogOut,
        profileModal,
        handleProfileModal,
        handleProfileImageChange,
        inputRef,
        triggerFileSelect,
        imageUrl,
        sectionRef,
        click,
        handleClickedSign,
        handleHeart,
        loadings,
      }}
    >
      <Header />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<AddedCart />} />
        <Route path="wishListPage" element={<WishListPage />} />
        {!isUserLoggedIn && <Route path="signup" element={<SignUp />} />}
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="passwordUpdate" element={<PasswordUpdate />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </apiContext.Provider>
  );
}

export default App;
