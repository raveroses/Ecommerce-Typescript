import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
interface Product {
  productImage: string;
  productPrice: number;
  productName: string;
  productStar?: string;
}

const ProductType = () => {
  const [product, setProduct] = useState<Product[]>([
    {
      productImage: "/images/phone.png",
      productPrice: 20,
      productName: "",
      productStar: "",
    },
    {
      productImage: "/images/phone.png",
      productPrice: 20,
      productName: "",
      productStar: "",
    },
  ]);

  return (
    <div className="font-Afacad ">
      <div className="group bg-gray-100 w-[250px] shadow-xl p-[10px] rounded-xl cursor-pointer">
        <div className="anotherBackground flex bg-gray-300 p-[10px] rounded">
          <div className="percent w-[60px] h-[15px] text-[10px] bg-red-600 rounded text-center ">
            20%
          </div>
          <div className="productImage">
            <img src="/images/phone.png" alt="" />
          </div>
          <div className="wishList">
            <FaRegHeart className="text-center" />
            <FaHeart className="hidden" />
          </div>
        </div>
        <div className="addToCartPart">
          <button className="invisible group-hover:visible bg-black text-white w-full h-[30px] text-center font-semibold">
            Add to Cart
          </button>
          <div className="productName text-[14px] font-semibold pt-[5px]">
            iPhone X
          </div>
          <div className="formerPriceAndNewPrice flex gap-[20px] text-[14px] font-semibold">
            <div className="newPrice text-red-600">$899.99</div>
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
    </div>
  );
};
export default ProductType;
