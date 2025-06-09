import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
type SVGComponent = {
  [key: string]: string;
};
const About = () => {
  const iconMap: SVGComponent[] = [
    {
      icon: "/images/market.svg",
      amount: "10.5k",
      para: "Sellers Active On our Site",
    },
    {
      icon: "/images/dollar.svg",
      amount: "33k",
      para: "Monthly Product Sales",
    },
    {
      icon: "/images/gift.svg",
      amount: "45.5",
      para: "Customers Active On our Site",
    },
    {
      icon: "/images/money.png",
      amount: "25k",
      para: "Annual Gross Sale on our Site",
    },
  ];
  const authors: SVGComponent[] = [
    {
      image: "/images/crise.svg",
      name: "Tom Cruise",
      position: "Founder & Chairman",
    },
    {
      image: "/images/emma.svg",
      name: "Emma Watson",
      position: "Managing Director",
    },
    {
      image: "/images/will.svg",
      name: "    Will Smith",
      position: "Product Designer",
    },
  ];

  const iconComponent = iconMap.map((icons, index) => {
    return (
      <div
        className="group border rounded text-center p-[7px] hover:bg-red-600 cursor-pointer 
      transition-all ease-in-out duration-300 hover:border-none"
        key={index}
      >
        <div>
          <img src={icons.icon} alt="" className="mx-auto w-[50px]" />
        </div>
        <h1 className="text-[19px] font-semibold group-hover:text-white pb-[8px]">
          {icons.amount}
        </h1>
        <p className="text-[13px] group-hover:text-white">{icons.para}</p>
      </div>
    );
  });

  const authorMap = authors.map((author, index) => {
    return (
      <div className="text-center mx-[5px]" key={index}>
        <div className="flex justify-center">
          <img
            src={author.image}
            alt=""
            className="md:w-[250px] w-[200px] max-w-full"
          />
        </div>
        <div className="deet mx-[3px]">
          <h1 className="md:text-[23px] text-[20px] font-semibold">
            {author.name}
          </h1>
          <p className="text-[13px]">{author.position}</p>
        </div>
        <div className="icon flex justify-center gap-[10px] my-[8px]">
          <div>
            <CiTwitter className="text-[25px]" />
          </div>
          <div>
            <CiInstagram className="text-[25px]" />
          </div>
          <div className="text-[30px">
            <CiLinkedin className="text-[25px]" />
          </div>
        </div>
      </div>
    );
  });

  const addIcon: SVGComponent[] = [
    {
      iconImage: "/images/truck.png",
      iconHeader: "FREE AND FAST DELIVERY",
      iconPara: "Free Delivery for all orders over $140  ",
    },
    {
      iconImage: "/images/headphone.png",
      iconHeader: "24/7 CUSTOMER SERVICE",
      iconPara: "Friendly 24/7 customer support",
    },
    {
      iconImage: "/images/money.png",
      iconHeader: "MONEY BACK GUARANTEE",
      iconPara: "We return money within 30 days",
    },
  ];
  return (
    <div className="my-[60px]">
      <section className="first flex md:pl-[150px] w-full md:justify-between items-center md:flex-row flex-col px-[10px]">
        <div className="md:w-[50%] md:text-left text-center ">
          <h1 className="text-[25px] font-semibold">Our Story</h1>
          <p className="text-[13px] py-[10px]">
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-[13px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="">
          <img
            src="/images/about.svg"
            alt=""
            className="md:w-[350px] w-[600px] max-w-full"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-4 grid-cols-2 justify-center gap-[50px] mt-[30px] mx-[10px] md:mx-[150px]">
        {iconComponent}
      </section>
      <section className="author grid justify-center md:grid-cols-3 grid-cols-2 my-[80px] mx-[10px]">
        {authorMap}
      </section>

      <section className="icon flex justify-center md:flex-row flex-col items-center md:gap-[60px] gap-[20px] mt-[60px]">
        {addIcon.map((Icon, index) => {
          return (
            <div key={index} className="text-center">
              <div className="image">
                <img
                  src={Icon.iconImage}
                  alt="iconImage"
                  className="m-auto w-[60px]"
                />
              </div>
              <div className="header text-[14px] font-semibold">
                {Icon.iconHeader}
              </div>
              <div className="para text-[13px] ">{Icon.iconPara}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default About;
