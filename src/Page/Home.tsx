import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
import UserAccount from "@/Component/UserAccount";
const Home = () => {
  const context = useContext(apiContext);
  if (!context) return;

  const { modal } = context;
  return (
    <div className="font-Afacad relative">
      <Category />
      <ProductListing />
      <ImageBanner />
      <div
        className={`fixed inset-0 bg-black opacity-40 z-10  ${
          modal ? "block" : "hidden"
        } `}
      ></div>
      <div className="absolute top-[-40px] md:top-0 md:right-10 z-40 md:w-[350px] w-[100%] h-[300px] bg-white shadow-2xl p-5 rounded font-Afacad">
        <UserAccount />
      </div>
    </div>
  );
};

export default Home;
