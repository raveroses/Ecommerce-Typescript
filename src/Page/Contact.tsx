import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
const Contact = () => {
  const [state, handleSubmit] = useForm("xjkvdqjb");
  if (state.succeeded) {
    return toast.success("Thanks for Reaching out, We'll get back to you");
  }
  return (
    <section className="flex item-center md:flex-row flex-col justify-between md:px-[50px] p-[10px] my-[50px]">
      <section className=" md:w-[27%] w-full h-[350px] shadow-2xl p-[30px]">
        <div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <div className="bg-red-600 rounded-full p-[5px]">
              <IoCall className="text-[15px] text-white" />
            </div>
            <h1 className="font-medium text-[15px]">Call Us</h1>
          </div>
          <p className="text-[14px] text-gray-500 pb-[15px]">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-[14px] text-gray-500 ">Phone: +8801611112222</p>
        </div>
        <hr className="my-[10px]" />
        <div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <div className="bg-red-600 rounded-full p-[5px]">
              <MdEmail />
            </div>
            <h1 className="font-medium text-[15px]">Write to us</h1>
          </div>
          <p className="text-[14px] text-gray-500 pb-[15px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-[14px] text-gray-500 pb-[15px]">
            Emails: customer@exclusive.com Support: support@exclusive.com
          </p>
        </div>
      </section>
      <section className="md:w-[65%] w-full md:h-[300px] h-[350px] shadow-2xl md:my-[40px] my-[60px] md:px-[20px] px-[10px]">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between md:flex-row flex-col gap-[10px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="rounded bg-gray-200 px-[5px] py-[5px] placeholder:text-[13px] md:w-[230px] w-full"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="rounded bg-gray-200 px-[5px] py-[5px] placeholder:text-[13px] md:w-[230px] w-full"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <input
              type="tel"
              name=""
              id=""
              placeholder="Phone Number"
              className="rounded bg-gray-200 px-[5px] py-[5px] placeholder:text-[13px] md:w-[230px] w-full"
            />
            <ValidationError
              prefix="Telephone"
              field="telephone"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="rounded bg-gray-200 w-full h-[120px] resize-none my-[15px] px-[5px] py-[5px] placeholder:text-[13px]"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-end ">
            <button
              type="submit"
              disabled={state.submitting}
              className="text-white bg-red-600 inline-block px-[15px] py-[5px] font-medium rounded cursor-pointer "
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
