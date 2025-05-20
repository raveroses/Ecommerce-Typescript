import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
type placeholders = string[];
const category: placeholders = [
  "Beauty",
  "Fragrances",
  "Laptops",
  "SmartPhones",
  "Tablets",
  "Furniture",
  "Groceries",
  "Home-Decoration",
  "Vehicles",
];
const Category = () => {
  const categoryMapping = category.map((cat, index) => {
    return (
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={50}
        slidesPerView={5}
        className=""
      >
        <li
          key={index}
          className="cursor-pointer hover:bg-gray-300 px-[5px] py-[5px] rounded"
        >
          <NavLink to={"/"}>{cat}</NavLink>
        </li>
      </Swiper>
    );
  });

  const imageMapping: placeholders = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/main-image3.jpg",
  ];
  return (
    <div className="md:px-[50px] lg:px-[90px] flex lg:flex-row md:flex-row flex-col md:gap-[100px] lg:gap-[170px]">
      <ul
        className="list-none flex flex-row md:flex-col lg:flex-col gap-[0px] md:gap-[10px] lg:gap-[10px] 
      font-semibold text-[16px] pr-[60px] py-[40px] md:border-r-2 md:border-gray-200  boder-none lg:border-r-2 lg:border-gray-200"
      >
        {categoryMapping}
      </ul>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mt-[50px]"
      >
        {imageMapping.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              {
                <img
                  src={`${image}`}
                  alt="image-Array"
                  className="w-[700px] h-[300px]"
                />
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
