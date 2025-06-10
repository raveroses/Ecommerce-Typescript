import { useContext, useState } from "react";
import apiContext from "@/CustomHooks/createContext";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const AddedCart = () => {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("error");
  }
  const { duplicateArray } = context;

  const [quantity, setQuantity] = useState(() => {
    const newValue: { [key: string]: number } = {};
    duplicateArray.forEach((product) => {
      const cuttingFromTitle = product.id.toString();
      newValue[cuttingFromTitle] = 1;
    });
    return newValue;
  });
  const handleIncrementQuantity = (id: number) => {
    setQuantity((prev) => {
      const currentQty = prev[id] ?? 0;
      const obj = { ...prev, [id]: currentQty + 1 };
      return obj;
    });
  };
  const handleDecrementQuantity = (id: number) => {
    setQuantity((prev) => {
      const least = Math.max(prev[id] - 1, 1);
      const reduce = { ...prev, [id]: least };
      return reduce;
    });
  };
  const cartedProduct = duplicateArray.map((product, index) => {
    return (
      <section
        key={index}
        className="w-full max-w-full flex justify-center shadow-xl items-center md:gap-[150px] gap-[40px] py-[15px]
         shadow-2xl mb-[10px] px-[10px] md:px-[5px]"
      >
        <div className="image flex">
          <img
            src={product.image}
            alt="phone-image"
            className="md:w-[50px] w-[20px] object-fit object-center"
          />
          <div className="md:text-[13px] text-[6px] font-bold md:font-medium">
            {product.title}
          </div>
        </div>
        <div className="price text-[14px] md:text-[15px]">
          ${product.price.toFixed(2)}
        </div>
        <div className="quantity flex border-1 border-black-600 rounded">
          <input
            type="number"
            value={quantity[product.id]}
            readOnly
            className="md:w-[50px] w-[30px] outline-none border-none focus-none text-center"
          />
          <div className="increment flex flex-col border-l-2 pl-[2px] ">
            <button onClick={() => handleIncrementQuantity(product.id)}>
              <FaAngleUp className="md:text-[16px] text-[12px] cursor-pointer" />
            </button>
            <button onClick={() => handleDecrementQuantity(product.id)}>
              <FaAngleDown className="md:text-[16px] text-[12px] cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="SubTotal text-[14px] md:text-[15px]">
          ${(product.price * quantity[product.id]).toFixed(2)}
        </div>
      </section>
    );
  });
  return (
    <section className="md:mx-[200px] mx-[5px] my-[70px] ">
      <section
        className="w-full md:mx-[10px] mx-[0px] flex justify-center items-center 
      md:gap-[150px] gap-[30px] md:py-[10px] py-[15px] shadow-2xl mb-[29px]"
      >
        <div className="md:text-[15px] text-[13px] font-medium">Product</div>
        <div className="text-[15px] text-[13px] font-medium">Price</div>
        <div className="text-[15px] text-[13px] font-medium">Quantity</div>
        <div className="text-[15px] text-[13px] font-medium">SubTotal</div>
      </section>
      <section className="">{cartedProduct}</section>
    </section>
  );
};

export default AddedCart;
