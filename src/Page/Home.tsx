import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
import type { UseFetchResult } from "@/CustomHooks/createContext";
const Home = ({ products, loading }: UseFetchResult) => {
  return (
    <div className="font-Afacad ">
      <Category />
      <ProductListing products={products} loading={loading} />
      <ImageBanner />
    </div>
  );
};

export default Home;
