import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, Bounce } from "react-toastify";
import apiContext from "@/CustomHooks/createContext";
import { useContext } from "react";

const ProductType = () => {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("error");
  }

  const { products, loading, handleRetrive, handleWishList, wishListId, cate } =
    context;

  const mappProduct = products.map((product, index) => {
    return (
      <div
        className="group bg-gray-100 w-full md:w-[250px] shadow-xl md:p-[10px] rounded-xl cursor-pointer mb-[40px] "
        key={index}
      >
        <div className="anotherBackground flex gap-[10px] md:gap-[5px] bg-gray-300 p-[10px] rounded">
          <div className="percent w-[30px] h-[15px] text-[10px] bg-red-600 rounded text-center  ">
            20%
          </div>
          <div className="productImage">
            <img
              src={product.image}
              alt="product-image"
              className="object-cover object-center rounded-2xl w-[230px] h-[150px] md:h-[160px]"
            />
          </div>
          <div
            className="wishList text-red-600"
            onClick={() => handleWishList(product.id)}
          >
            {wishListId[product.id] === product.id ? (
              <FaHeart className="text-center" />
            ) : (
              <FaRegHeart className="text-center" />
            )}
          </div>
        </div>
        <div className="addToCartPart p-[7px]">
          <button
            className="block md:invisible md:group-hover:visible bg-black text-white w-full
             md:h-[30px] h-[30px] text-center font-semibold cursor-pointer"
            onClick={() => handleRetrive(product.id)}
          >
            Add to Cart
          </button>
          <div className="productName text-[12px] font-semibold md:pt-[5px] ">
            {product.title}
          </div>
          <div className="formerPriceAndNewPrice flex gap-[20px] text-[14px] font-semibold">
            <div className="newPrice text-red-600">{product.price}</div>
            <div className="oldPrice line-through text-gray-500">$1076.30</div>
          </div>
          <div className="star flex text-yellow-500 text-[12px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <FaRegStar />
          </div>
        </div>
      </div>
    );
  });

  const CategoryDisplay = cate.map((product, index) => {
    return (
      <div
        className="group bg-gray-100 w-full md:w-[250px] shadow-xl md:p-[10px] rounded-xl cursor-pointer mb-[40px] "
        key={index}
      >
        <div className="anotherBackground flex gap-[10px] md:gap-[5px] bg-gray-300 p-[10px] rounded">
          <div className="percent w-[30px] h-[15px] text-[10px] bg-red-600 rounded text-center  ">
            20%
          </div>
          <div className="productImage">
            <img
              src={product.image}
              alt="product-image"
              className="object-cover object-center rounded-2xl w-[230px] h-[150px] md:h-[160px]"
            />
          </div>
          <div
            className="wishList text-red-600"
            onClick={() => handleWishList(product.id)}
          >
            {wishListId[product.id] === product.id ? (
              <FaHeart className="text-center" />
            ) : (
              <FaRegHeart className="text-center" />
            )}
          </div>
        </div>
        <div className="addToCartPart p-[7px]">
          <button
            className="block md:invisible md:group-hover:visible bg-black text-white w-full 
            md:h-[30px] h-[30px] text-center font-semibold cursor-pointer"
            onClick={() => handleRetrive(product.id)}
          >
            Add to Cart
          </button>
          <div className="productName text-[12px] font-semibold md:pt-[5px] ">
            {product.title}
          </div>
          <div className="formerPriceAndNewPrice flex gap-[20px] text-[14px] font-semibold">
            <div className="newPrice text-red-600">{product.price}</div>
            <div className="oldPrice line-through text-gray-500">$1076.30</div>
          </div>
          <div className="star flex text-yellow-500 text-[12px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <FaRegStar />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="font-Afacad ">
      {loading ? (
        <>loading....</>
      ) : (
        <div
          className={`grid grid-cols-2 md:justify-center md:grid-cols-4 gap-[10px] md:gap-[0px] my-[50px]  ${
            cate.length > 0 ? "hidden" : "block"
          }`}
        >
          {mappProduct}
        </div>
      )}
      <div
        className={`grid grid-cols-2 md:justify-center md:grid-cols-4 gap-[10px] md:gap-[0px] my-[50px] ${
          cate.length > 0 ? "block" : "hidden"
        }`}
      >
        {CategoryDisplay}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
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
    </div>
  );
};
export default ProductType;
