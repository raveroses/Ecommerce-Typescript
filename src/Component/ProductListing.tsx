import { useEffect, useState } from "react";
import ProductType from "@/types/ProductType";
type flashsales = {
  dayNumber: number;
  dayString: string;
};

const ProductListing = () => {
  const [dateSetting, setDateSetting] = useState<Record<string, number>>({
    dayLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0,
  });
  const flashSalesCountDown: flashsales[] = [
    { dayNumber: dateSetting.dayLeft, dayString: "Days" },
    { dayNumber: dateSetting.hoursLeft, dayString: "Hours" },
    { dayNumber: dateSetting.minutesLeft, dayString: "Minutes" },
    { dayNumber: dateSetting.secondsLeft, dayString: "Seconds" },
  ];

  useEffect(() => {
    const nextMonth = new Date(2025, 5, 8, 0, 0, 0).getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = nextMonth - now;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        // Optionally do something when countdown ends
      } else {
        setDateSetting((prev) => ({
          ...prev,
          dayLeft: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hoursLeft: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutesLeft: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          secondsLeft: Math.floor((timeLeft % (1000 * 60)) / 1000),
        }));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const flashSalesCount = flashSalesCountDown.map((item, index) => {
    console.log(item);

    return (
      <div key={index}>
        <div className="font-bold md:text-[10px] text-[8px] text-center">
          {item.dayString}
        </div>
        <div className="font-bold text-[22px] md:text-[30px]">
          {item.dayNumber}
          <span className="text-red-500">
            {flashSalesCountDown.length - 1 === index ? "" : ":"}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="m-[33px]">
      <div className="todays flex items-center gap-[10px]">
        <div className="bg-red-500 md:w-[20px] md:h-[40px] w-[15px] h-[30px] rounded-l"></div>
        <span className="font-semibold text-[18px] text-red-500">Today's</span>
      </div>

      <section className="flashsales flex md:gap-[100px] items-center justify-between md:justify-start">
        <div className="text-[22px] font-bold md:text-[26px] ">Flash Sales</div>
        <div className="time flex gap-[10px]">{flashSalesCount}</div>
      </section>
      <section className="product">
        <ProductType />
      </section>
    </div>
  );
};

export default ProductListing;
