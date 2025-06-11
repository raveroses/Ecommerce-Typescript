import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
const Home = () => {
  const context = useContext(apiContext);
  if (!context) return;

  const { modal } = context;
  return (
    <div className="font-Afacad ">
      <Category />
      <ProductListing />
      <ImageBanner />
      <div
        className={`fixed inset-0 bg-black opacity-40 z-10  ${
          modal ? "block" : "hidden"
        } `}
      ></div>
    </div>
  );
};

export default Home;
