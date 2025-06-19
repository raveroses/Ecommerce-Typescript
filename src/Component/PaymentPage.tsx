import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast, ToastContainer, Bounce } from "react-toastify";
const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC;

const PaymentPage = ({ finalTotal }: Record<string, number>) => {
  const [paymentuser, setPaymentUser] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isPhone = /^(?:\+?234|0)\d{10}$/;

    const email = paymentuser.email.trim();
    const name = paymentuser.name.trim();
    const address = paymentuser.address.trim();
    const phone = paymentuser.phoneNumber.trim();

    if (!isEmail.test(email) || !isPhone.test(phone) || !name || !address) {
      toast.error("Please, check all fields");
      return null;
    }

    const componentProps = {
      email,
      amount: finalTotal * 100,
      publicKey: paystackPublicKey,
      text: "Pay",
      onSuccess: (ref: any) => toast.success("Payment successful!"),
      onClose: () => toast.error("Payment closed"),
    };

    return componentProps;
  };

  const prop = handleValidation();
  return (
    <section className="absolute md:top-[-70px] md:left-60 top-[-30px]  bg-white md:w-[400px] w-full shadow-2xl md:p-5 p-[10px] font-Afacad">
      <h3 className=" text-center md:text-[20px] text-[16px] font-semibold text-gray-500 pb-5">
        Billing Details
      </h3>
      <form action="" className="flex flex-col">
        <label
          htmlFor="name"
          className="text-gray-500 text-[14px] font-semibold pb-1"
        >
          First Name
        </label>

        <input
          type="text"
          value={paymentuser.name}
          name="name"
          id="name"
          className="border-none outline-none bg-gray-200 md:py-1 py-4 rounded px-[7px] pb-1"
          onChange={handleOnchange}
        />
        <label
          htmlFor="telephone"
          className="text-gray-500 text-[14px] font-semibold pb-1"
        >
          Telephone
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="telephone"
          value={paymentuser.phoneNumber}
          className="border-none outline-none bg-gray-200 md:py-1 py-4  rounded px-[7px] pb-1"
          onChange={handleOnchange}
        />
        <label
          htmlFor="address"
          className="text-gray-500 text-[14px] font-semibold pb-1 "
        >
          Address
        </label>
        <input
          type="address"
          value={paymentuser.address}
          name="address"
          id="address"
          className="border-none outline-none bg-gray-200 md:py-1 py-4  rounded px-[7px] pb-1"
          onChange={handleOnchange}
        />
        <label
          htmlFor="email"
          className="text-gray-500 text-[14px] font-semibold pb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={paymentuser.email}
          className="border-none outline-none bg-gray-200 md:py-1 py-4  rounded px-[7px] pb-1"
          onChange={handleOnchange}
        />
        <section
          className="md:w-[150px] mx-auto border-1 border-red-600 rounded p-4 shadow-2xl md:my-3 my-1 "
          onChange={handleOnchange}
        >
          <div className="flex justify-between">
            <h3 className="text-red-600 text-[14px] font-bold">Total</h3>
            <h3 className="text-[14px]">${finalTotal}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-red-600 text-[14px] font-bold">Shipping</h3>
            <h3 className="text-[14px]">Free</h3>
          </div>
          {prop && (
            <PaystackButton
              {...prop}
              className="bg-red-600 text-center font-semibold text-[16px] cursor-pointer w-full py-[4px] text-white"
            />
          )}
        </section>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

export default PaymentPage;
