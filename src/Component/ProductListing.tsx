import { useEffect } from "react";

type flashsales = {
  dayNumber: number;
  dayString: string;
};

const ProductListing = () => {
  const datee = new Date();
  datee.setDate(20);
  datee.setHours(12);
  datee.setMinutes(60);
  datee.setSeconds(60);
  const flashSalesCountDown: flashsales[] = [
    { dayNumber: datee.getDate(), dayString: "Days" },
    { dayNumber: datee.getHours(), dayString: "Hours" },
    { dayNumber: datee.getMinutes(), dayString: "Minutes" },
    { dayNumber: datee.getSeconds(), dayString: "Seconds" },
  ];

  //   const handleCountDown = () => {
  //     const subtractedDate = new Date();
  //     console.log(subtractedDate.getDate() - datee.getDate());
  //   };
  const subtractedDate = new Date();
  console.log(subtractedDate.getDate() - datee.getDate());
  //   useEffect(() => {
  //     setInterval(() => {
  //       handleCountDown();
  //     }, 2000);
  //   }, []);

  const flashSales = flashSalesCountDown.map((item, index) => {
    console.log(item);

    return (
      <div key={index}>
        <div className="font-bold text-[10px] text-center">
          {item.dayString}
        </div>
        <div className="font-bold text-[30px]">
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
      <div className="todays flex items-center md:md:gap-[10px]">
        <div className="bg-red-500 md:w-[20px] md:h-[40px] rounded-l"></div>
        <span className="font-semibold text-[18px] text-red-500">Today's</span>
      </div>

      <section className="flashsales flex gap-[100px] items-center">
        <div className="text-[26px] font-bold">Flash Sales</div>
        <div className="time flex gap-[10px]">{flashSales}</div>
      </section>
    </div>
  );
};

export default ProductListing;
