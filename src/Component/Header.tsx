import { FaRegHeart } from "react-icons/fa";
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
import UserAccount from "@/Component/UserAccount";
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
    handleProfileModal,
    profileModal,
    handleHeart,
    handleCart,
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
        className="flex justify-between items-center pt-[10px] w-full  md:px-[50px]
       px-[5px] border-b-1 pb-[15px] border-gray-200"
      >
        <div className=" text-[18px] font-bold md:text-[20px]">
          <NavLink to={"/"}>ShopUp</NavLink>
        </div>

        <div
          className={` text-center md:static absolute left-0 top-[100px] md:w-[40%] w-[400px] mx-[10px] z-20 
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
          <ul
            className="flex w-full md:flex-row flex-col md:shadow-none shadow-xl list-none md:gap-[20px]
           gap-[25px] py-[15px] "
          >
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

        <div className=" flex  items-center gap-[5px] md:gap-[15px]">
          <form
            className=" flex items-center gap-[3px]"
            onSubmit={handleFormSubmission}
          >
            <input
              value={inputText}
              type="text"
              placeholder="What are you looking for?"
              className="outline-none placeholder:text-[13px] rounded border-1 border-black px-1 w-[130px] md:w-[200px]"
              onChange={handleSearch}
            />
            <button type="submit" className="text-[22px]">
              <IoSearch />
            </button>
          </form>

          <div className="md:relative" onClick={handleHeart}>
            <p className="text-center font-semibold text-red-600 md:static absolute top-[30px] right-[92px]">
              {wishList.count}
            </p>

            <FaRegHeart className="md:text-[20px] text-[22px] cursor-pointer" />
          </div>

          <div className="" onClick={handleCart}>
            <BsCart3 className="text-[22px] cursor-pointer" />
          </div>
          <div onClick={handleProfileModal}>
            <FaRegUser className="text-[20px] cursor-pointer" />
          </div>
          <div className="md:hidden block text-[25px]" onClick={handleModal}>
            <CiMenuFries />
          </div>
        </div>
      </section>
      <div
        className={`fixed inset-0 bg-black opacity-40 z-10  ${
          modal ? "block" : "hidden"
        } `}
      ></div>
      <div
        className={`absolute top-[90px] md:top-24 md:right-10 z-40 md:w-[350px] w-[100%] 
      h-[350px] bg-white shadow-2xl p-5 rounded font-Afacad ${
        profileModal ? "block" : "hidden"
      }`}
      >
        <UserAccount />
      </div>
    </header>
  );
};
export default Header;
