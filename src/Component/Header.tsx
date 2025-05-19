import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="headerParent bg-black h-[30px] text-center text-gray-400 text-[13px]">
        <p className="text-center p-[5px]">
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%
          <span className="text-white"> Shop Now</span>
        </p>
      </div>

      <section className=" flex justify-between items-center pt-[10px] px-10">
        <div className="font-bold text-[20px]">Shoppy Store</div>
        <ul className="flex list-none gap-[30px]">
          <li>Home</li>
          <li>Contact</li>
          <li>Sign up</li>
          <li>Shop</li>
        </ul>

        <div className="flex justify-between gap-[50px]">
          <form action="">
            <input type="text" placeholder="search products" />
          </form>
          <div>
            <FaRegHeart className="hidden" />
            <FaHeart />
          </div>
          <div>
            <FaShoppingCart />
            <BsCart3 className="hidden" />
          </div>
          <div>
            <FaUser />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
