import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
// import UnorderList from "./Navbar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import apiContext from "@/CustomHooks/createContext";
import { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("error");
  }
  const {
    wishList,
    handleSearch,
    handleFormSubmission,
    inputText,
    modal,
    handleModal,
  } = context;

  return (
    <header className="relative">
      <div className="bg-black h-[30px] text-center text-gray-400 md:text-[13px] lg:text-[13px] text-[9px]">
        <p className="text-center p-[5px]">
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%
          <span className="text-white"> Shop Now</span>
        </p>
      </div>

      <section
        className=" w-full flex justify-between items-center pt-[10px] md:px-[80px] 
       px-[5px] border-b-1 pb-[15px] border-gray-200"
      >
        <div className="md:font-bold font-semibold text-[20px] md:w-[20%]">
          <NavLink to={"/"}>Shoppy Store</NavLink>
        </div>

        <div
          className={` text-center w-full md:static absolute left-0 top-[100px] md:w-[40%] z-20 
            rounded mx-w-full md:bg-transparent bg-white md:block ${
              modal ? "block" : "hidden"
            }`}
        >
          <div
            className="md:hidden flex justify-end text-[25px] text-red-600"
            onClick={handleModal}
          >
            <FaTimes />
          </div>
          <ul className="flex w-full md:flex-row flex-col md:shadow-none shadow-xl list-none md:gap-[20px] gap-[25px] py-[15px] ">
            <Navbar
              navbarsList={[
                { path: "/", list: "Home" },
                { path: "contact", list: "Contact" },
                { path: "signup", list: "Sign Up" },
                { path: "about", list: "About" },
              ]}
            />
          </ul>
        </div>

        <div className="relative flex justify-between items-center gap-[10px] md:gap-[0px] ">
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
            <button type="submit" className="text-[25px] md:text-[20px]">
              <IoSearch />
            </button>
          </form>

          <div className="md:relative">
            <p className="text-center font-semibold text-red-600 md:static absolute top-[9px] right-[104px]">
              {wishList.count}
            </p>
            <NavLink to="wishListPage">
              <FaRegHeart className="md:text-[20px] text-[25px] cursor-pointer" />
            </NavLink>
          </div>
          <NavLink to={"/cart"} className="">
            <FaShoppingCart className="hidden" />
            <BsCart3 className="text-[20px] cursor-pointer" />
          </NavLink>
          <div>
            <FaRegUser className="text-[20px] cursor-pointer" />
          </div>
          <div className="md:hidden block text-[25px]" onClick={handleModal}>
            {modal ? <FaTimes /> : <CiMenuFries />}
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
