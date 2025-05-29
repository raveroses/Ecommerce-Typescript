import { MdOutlineSend } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-black w-full max-w-full text-white px-[20px] pt-[10px] ">
      <div className="flex item-center md:justify-between justify-center md:gap-0 gap-[20px] md:flex-row flex-col text-center md:text-left">
        <div>
          <h1 className="font-semibold text-[25px]">Exclusive Store</h1>
          <h2 className="text-[16px]">Subscribe</h2>
          <p className="md:text-[12px] text-[13px]">
            Get 10% off your first order
          </p>
          <div className="md:w-[160px] w-full h-[36px] md:mx-0 mx-auto flex justify-between items-center border-1 border-white rounded">
            <input
              type="text"
              placeholder="Enter your email"
              className="md:placeholder:text-[12px] placeholder:text-[13px] p-[3px] outline-none border-none w-[120px]"
            />
            <MdOutlineSend className="text-[25px] text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h1 className="font-bold md:text-[18px] text-[16px]">Support</h1>
          <address className="text-[12px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </address>
          <address className="text-[12px]">exclusivestore@gmail.com</address>
          <p className="text-[12px]">+123 456 7890</p>
        </div>
        <div>
          <h1 className="font-bold md:text-[18px] text-[16px]">Account</h1>
          <p className="text-[12px]">My Account</p>
          <p className="text-[12px]">Register/Login</p>
          <p className="text-[12px]">Cart</p>
          <p className="text-[12px]">Shop</p>
        </div>
        <div>
          <h1 className="font-bold md:text-[18px] text-[16px]">Quick Link</h1>
          <p className="text-[12px]">Privacy Policy</p>
          <p className="text-[12px]">Terms Of Use</p>
          <p className="text-[12px]">FAQs</p>
          <p className="text-[12px]">Contact</p>
        </div>
        <div>
          <h1 className="font-bold md:text-[18px] text-[16px]">Download App</h1>
          <p className="text-[12px]">Save $3 with app New user only</p>
          <div className="flex items-center gap-[10px] justify-center mt-[10px] md:mt-0]">
            <img src="/images/scanw2.png" alt="scan2" />
            <img src="/images/scan.png" alt="scan-image" />
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <hr className="border-[1px] border-gray-600 " />
        <p className="text-center text-gray-400 text-[14px]">
          © 2025 All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
