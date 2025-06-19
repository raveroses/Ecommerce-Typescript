import { useContext, useEffect, useState } from "react";
import apiContext from "@/CustomHooks/createContext";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import PaymentPage from "@/Component/PaymentPage";
const AddedCart = () => {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("error");
  }
  const { duplicateArray } = context;
  const [total, setTotal] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(() => {
    const newValue: { [key: string]: number } = {};
    duplicateArray.forEach((product) => {
      const id = product.id.toString();
      const title = product.title;
      newValue[id] = 1;
      newValue[title] = product.price;
    });
    return newValue;
  });

  const handleIncrementQuantity = (
    id: number,
    title: string,
    price: number
  ) => {
    setQuantity((prev) => {
      const currentQty = prev[id] ?? 1;
      // const currentPrice = prev[price] ?? 0;
      const obj = {
        ...prev,
        [id]: currentQty + 1,
        [title]: (currentQty + 1) * price,
      };
      return obj;
    });
  };
  console.log(quantity);
  const handleDecrementQuantity = (
    id: number,
    title: string,
    price: number
  ) => {
    setQuantity((prev) => {
      const least = Math.max(prev[id] - 1, 1);
      const reduce = {
        ...prev,
        [id]: least,
        [title]: least * price,
      };
      return reduce;
    });
  };

  useEffect(() => {
    const pro = duplicateArray.map((product) => {
      const quanty = quantity[product.id] ?? 1;
      return quanty * product.price;
    });
    setTotal(pro);
  }, [quantity, duplicateArray]);

  const finalTotal = total.reduce(
    (accum, currentValue) => accum + currentValue,
    0
  );
  console.log(typeof finalTotal);

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
            <button
              onClick={() =>
                handleIncrementQuantity(
                  product.id,
                  product.title,
                  product.price
                )
              }
            >
              <FaAngleUp className="md:text-[16px] text-[12px] cursor-pointer" />
            </button>
            <button
              onClick={() =>
                handleDecrementQuantity(
                  product.id,
                  product.title,
                  product.price
                )
              }
            >
              <FaAngleDown className="md:text-[16px] text-[12px] cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="SubTotal text-[14px] md:text-[15px]">
          ${quantity[product.title]}
        </div>
      </section>
    );
  });

  const [viewPaymentPage, setViewPaymentPage] = useState<boolean>(false);
  const handleViewPaymentPayment = () => {
    setViewPaymentPage((prev) => !prev);
  };
  return (
    <section className="md:mx-[200px] mx-[5px] my-[70px] relative">
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

      <section className="fullPrice shadow-xl mx-auto w-[250px] p-[10px]">
        <h1 className="text-[15px] font-medium pb-[17px]">Cart Total</h1>

        <div className="flex border-b text-[14px] justify-between pb-[2px] mb-[15px]">
          <div> Shipping:</div>
          <div>Free</div>
        </div>
        <div className="flex  text-[14px] justify-between pb-[2px] mb-[15px]">
          <div>Total:</div>
          <div className="font-semibold"> ${finalTotal}</div>
        </div>
        <button
          className="bg-red-600 text-white text-center rounded w-full py-[7px] font-medium font-[12px]"
          onClick={handleViewPaymentPayment}
        >
          Proceed to checkout
        </button>
      </section>

      {viewPaymentPage && <PaymentPage finalTotal={finalTotal} />}
    </section>
  );
};

export default AddedCart;
