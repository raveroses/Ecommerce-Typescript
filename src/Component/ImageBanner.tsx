import { useState } from "react";

interface imageBanner {
  imageHeroo: { src: string; style: string };
  imagePlayStation: { src: string; style: string };
  imageWomen: { src: string; style: string };
  imageGucci: { src: string; style: string };
  icon: Record<string, string>[];
}

const ImageBanner = () => {
  const [images, setImages] = useState<imageBanner>({
    imageHeroo: {
      src: "./images/hero.png",
      style: " mx-auto md:w-[85%] md:h-[400px] w-full h-[200px] max-w-full",
    },
    imagePlayStation: {
      src: "./images/playstation.png",
      style: "md:w-[600px] md:h-[530px] w-full h-[300px] max-w-full",
    },
    imageWomen: {
      src: "./images/women.png",
      style: "w-[500px] mb-[20px] max-w-full",
    },
    imageGucci: {
      src: "./images/gucci.png",
      style: "w-[500px] max-w-full",
    },
    icon: [
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
    ],
  });
  return (
    <section className="md:mx-[33px] md:my-[50px] mx-[10px] my-[30px]">
      <section className="hero-image">
        <img
          src={images.imageHeroo.src}
          alt="image-hero"
          className={images.imageHeroo.style}
        />
      </section>

      <section className="gridImage my-[100px]">
        <div className="flex items-center gap-[10px]">
          <div className="bg-red-500 md:w-[20px] md:h-[40px] w-[15px] h-[30px] rounded-l"></div>
          <span className="font-semibold text-[18px] text-red-500">
            Featured
          </span>
        </div>

        <div className="">
          <div className="text-[22px] font-bold md:text-[30px] ">
            New Arrival
          </div>
        </div>
      </section>

      <div className="flex-Image flex justify-between md:flex-row flex-col mx-[10px] md:gap-0 gap-[30px]">
        <div>
          <img
            src={images.imagePlayStation.src}
            alt="playStation-Image"
            className={images.imagePlayStation.style}
          />
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img
              src={images.imageWomen.src}
              alt="women-image"
              className={images.imageWomen.style}
            />
          </div>

          <div>
            <img
              src={images.imageGucci.src}
              alt="image-speaker"
              className={images.imageGucci.style}
            />
          </div>
        </div>
      </div>

      <section className="icon flex justify-center md:flex-row flex-col items-center md:gap-[60px] gap-[20px] mt-[60px]">
        {images.icon.map((Icon, index) => {
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
    </section>
  );
};
export default ImageBanner;
