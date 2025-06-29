import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
const Home = () => {
  const context = useContext(apiContext);
  if (!context) return;

  const { loadings } = context;
  return (
    <div className="font-Afacad relative">
      {loadings ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Category />
          <div>
            <ProductListing />
          </div>
          <ImageBanner />
        </>
      )}
      {/* <Category />
      <div>
        <ProductListing />
      </div>
      <ImageBanner /> */}
    </div>
  );
};

export default Home;
