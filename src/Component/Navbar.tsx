import { useState } from "react";
import { NavLink } from "react-router-dom";
type List = {
  item: string[];
};

const Navbar = (element: List) => {
  const [click, setClick] = useState<string>("");
  const handleClickedSign = (item: string) => {
    setClick(item);
  };
  const ListMap = element.item.map((list, index) => {
    return (
      <li
        className={`cursor-pointer transition-all duration-200 hover:text-red-600 text-[14px] hover:text-[16px] hover:scale-105 ${
          click === list ? "border-b-2 border-gray-600 " : "border-none "
        }`}
        onClick={() => handleClickedSign(list)}
        key={index}
      >
        <NavLink to={"/"}>{list}</NavLink>
      </li>
    );
  });

  return <>{ListMap}</>;
};
export default Navbar;
