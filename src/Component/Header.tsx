import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import UnorderList from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="bg-black h-[30px] text-center text-gray-400 md:text-[13px] lg:text-[13px] text-[9px]">
        <p className="text-center p-[5px]">
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%
          <span className="text-white"> Shop Now</span>
        </p>
      </div>

      <section
        className=" flex justify-between items-center pt-[10px] md:px-[5px] lg:px-[10px]
       px-[20px] md:px-10 border-b-1 pb-[15px] border-gray-200"
      >
        <div className="font-bold text-[20px]">
          <NavLink to={"/"}>Shoppy Store</NavLink>
        </div>

        <ul className="hidden lg:flex md:flex md:block lg:block list-none lg:gap-[30px] md:gap-[15px]">
          <UnorderList item={["Home", "Contact", "Sign Up", "Shop"]} />
        </ul>

        <div className="relative flex justify-between items-center gap-[20px] md:gap-[30px] lg:gap-[30px]">
          <form className=" md:flex lg:flex md:flex-row lg:flex-row gap-[10px] bg-[#F5F5F5] px-[4px] py-[6px] w-[50%] rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none border-none placeholder:text-[13px] w-[80%] absolute top-[50px] right-[120px]"
            />
            <button className="md:block hidden">
              <FaSearch />
            </button>
          </form>
          <button className="md:block lg:hidden md:hidden">
            <FaSearch />
          </button>
          <div>
            <FaRegHeart className="text-[20px] cursor-pointer" />
            <FaHeart className="hidden" />
          </div>
          <div>
            <FaShoppingCart className="hidden" />
            <BsCart3 className="text-[20px] cursor-pointer" />
          </div>
          <div>
            <FaRegUser className="text-[20px] cursor-pointer" />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
