import Category from "@/Component/Category";
import ProductListing from "@/Component/ProductListing";
import ImageBanner from "@/Component/ImageBanner";
const Home = () => {
  return (
    <div className="font-Afacad relative">
      <Category />
      <div>
        <ProductListing />
      </div>
      <ImageBanner />
    </div>
  );
};

export default Home;
