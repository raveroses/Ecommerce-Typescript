import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
import Loading from "@/Component/Loading";
const Home = () => {
  const context = useContext(apiContext);
  if (!context) return;

  const { loadings } = context;
  return (
    <div className="font-Afacad relative">
      {loadings ? (
        <Loading />
      ) : (
        <>
          <Category />
          <div>
            <ProductListing />
          </div>
          <ImageBanner />
        </>
      )}
    </div>
  );
};

export default Home;
