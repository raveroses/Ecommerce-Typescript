import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
const WishListPage = () => {
  const context = useContext(apiContext);
  if (!context) throw new Error("Not available");

  const { wishList, loading, handleRetrive, handleWishList, wishListId } =
    context;

  const mappProduct = wishList.wishLitter.map((product, index) => {
    return (
      <div
        className="group bg-gray-100 w-[280px] md:w-[250px] shadow-xl p-[10px] rounded-xl cursor-pointer"
        key={index}
      >
        <div className="anotherBackground flex gap-[5px] bg-gray-300 p-[10px] rounded">
          <div className="percent w-[30px] h-[15px] text-[10px] bg-red-600 rounded text-center ">
            20%
          </div>
          <div className="productImage">
            <img
              src={product.image}
              alt="product-image"
              className="object-center rounded-2xl w-[200px] h-[180px] md:h-[160px] gap-[100px]"
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
        <div className="addToCartPart">
          <button
            className="invisible group-hover:visible bg-black text-white w-full h-[30px] text-center font-semibold cursor-pointer"
            onClick={() => handleRetrive(product.id)}
          >
            Add to Cart
          </button>
          <div className="productName text-[12px] font-semibold pt-[5px]">
            {product.title}
          </div>
          <div className="formerPriceAndNewPrice flex gap-[20px] text-[14px] font-semibold">
            <div className="newPrice text-red-600">{product.price}</div>
            <div className="oldPrice line-through text-gray-500">$1076.30</div>
          </div>
          <div className="star flex text-yellow-500">
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

  console.log(wishList.wishLitter);
  return (
    <div className="font-Afacad ">
      <div className="grid grid-col-1 justify-center md:grid-cols-4 gap-[25px] md:gap-[10px my-[50px]">
        {loading ? <p>Loading....</p> : mappProduct}
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

export default WishListPage;
