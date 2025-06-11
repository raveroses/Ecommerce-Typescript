import { useState } from "react";
import { NavLink } from "react-router-dom";
type List = {
  navbarsList: Record<string, string>[];
};

const Navbar = (element: List) => {
  const [click, setClick] = useState<string>("");
  const handleClickedSign = (item: string) => {
    setClick(item);
  };
  const ListMap = element.navbarsList.map((nav, index) => {
    return (
      <li
        className={`md:text-black text-red-600 font-semibold md:font-medium cursor-pointer
           transition-all duration-200 hover:text-red-600 text-[14px] hover:text-[16px] md:hover:scale-105 ${
             click === nav.list
               ? "md:border-b-2 md:border-gray-600 "
               : "border-none "
           }`}
        onClick={() => handleClickedSign(nav.list)}
        key={index}
      >
        <NavLink to={nav.path}>{nav.list}</NavLink>
      </li>
    );
  });

  return <>{ListMap}</>;
};
export default Navbar;
