import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import UnorderList from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import apiContext from "@/CustomHooks/createContext";
import { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
const Header = () => {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("error");
  }
  const { wishList, handleSearch, handleFormSubmission, inputText } = context;
  console.log(wishList.count);

  return (
    <header>
      <div className="bg-black h-[30px] text-center text-gray-400 md:text-[13px] lg:text-[13px] text-[9px]">
        <p className="text-center p-[5px]">
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%
          <span className="text-white"> Shop Now</span>
        </p>
      </div>

      <section
        className=" flex justify-between items-center pt-[10px] md:px-[80px] 
       px-[5px] border-b-1 pb-[15px] border-gray-200"
      >
        <div className="font-bold text-[20px]">
          <NavLink to={"/"}>Shoppy Store</NavLink>
        </div>

        <ul className="hidden lg:flex md:flex md:block lg:block list-none lg:gap-[30px] md:gap-[15px]">
          <UnorderList
            navbarsList={[
              { path: "/", list: "Home" },
              { path: "contact", list: "Contact" },
              { path: "signup", list: "Sign Up" },
              { path: "about", list: "About" },
            ]}
          />
        </ul>

        <div className="relative flex justify-between items-center gap-[20px] md:gap-[0px] ">
          <form
            className=" md:flex md:items-center md:flex-row gap-[10px] md:bg-[#F5F5F5] bg-none px-[4px] py-[6px] w-[50%] rounded "
            onSubmit={handleFormSubmission}
          >
            <input
              value={inputText}
              type="text"
              placeholder="What are you looking for?"
              className="outline-none border-none placeholder:text-[13px] w-[80%] md:static absolute top-[60px] md:top-[0px] right-[120px] md:right-0"
              onChange={handleSearch}
            />
            <button type="submit" className="md:block hidden">
              <FaSearch />
            </button>
            <button className="md:block lg:hidden md:hidden">
              <FaSearch />
            </button>
          </form>

          <div className="">
            <p className="text-center font-semibold text-red-600">
              {wishList.count}
            </p>
            <NavLink to="wishListPage">
              <FaRegHeart className="text-[20px] cursor-pointer" />
            </NavLink>
          </div>
          <NavLink to={"/cart"} className="">
            <FaShoppingCart className="hidden" />
            <BsCart3 className="text-[20px] cursor-pointer" />
          </NavLink>
          <div>
            <FaRegUser className="text-[20px] cursor-pointer" />
          </div>
          <div className="md:hidden block text-[25px]">
            <CiMenuFries />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
