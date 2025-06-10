import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import apiContext from "@/CustomHooks/createContext";
import { useContext } from "react";
type placeholders = string[];

const Category = () => {
  const context = useContext(apiContext);
  if (!context) throw new Error("Invalid context");

  const { handleCategory, category } = context;
  const categoryMapping = category.map((cat, index) => {
    return (
      <li
        key={index}
        className="sw-[100px] cursor-pointer 
        md:px-[5px] md:py-[5px] text-center py-[6px]
         md:text-left px-[7px] rounded text-[14px] md:text-[15px] hover:bg-gray-300"
        onClick={() => handleCategory(cat)}
      >
        <NavLink to={"/"}>{cat}</NavLink>
      </li>
    );
  });

  const imageMapping: placeholders = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/main-image3.jpg",
  ];
  return (
    <div className="mt-[30px] md:mt-0 md:px-[90px] px-[30px] flex md:flex-row flex-col md:gap-[120px] gap-0">
      <ul
        className="scrollbar-hide w-full md:w-[30%] overflow-x-auto list-none flex 
        flex-row md:flex-col gap-[7px] md:gap-[10px]
      font-semibold text-[16px] md:pr-[90px] py-[10px] md:border-r-2 
      md:border-gray-200 boder-none lg:border-gray-200 mx-[4px] md:pt-[130px]"
      >
        {categoryMapping}
      </ul>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { spaceBetween: 10, slidesPerView: 1 },
          768: { spaceBetween: 50, slidesPerView: 1 },
        }}
        className="md:mt-[50px] w-full mt-[15px]"
      >
        {imageMapping.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`${image}`}
                alt="image-Array"
                className=" md:w-[700px] md:h-[300px] w-full h-[150px] m-auto "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
