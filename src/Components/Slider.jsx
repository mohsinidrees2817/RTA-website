// Import Swiper React components
import {
  EffectFade,
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

//   SwiperCore.use([Autoplay]);

export default ({ steps }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="py-[20px]">
      <Swiper
        autoplay={{ delay: 3000 }}
        effect="fade"
        grabCursor={true}
        pagination={{ el: "#custom-pagination", clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          790: {
            slidesPerView: 2,
            spaceBetween: 10, // Reduce the space between slides
          },

          1000: {
            slidesPerView: 2.5,
            spaceBetween: 10, // Reduce the space between slides
          },
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        className=""
      >
        {steps.map((step, index) => {
          return (
            <SwiperSlide key={index} className="  ">
              <div className="flex justify-center items-center transform transition-all duration-300 linear ">
                <div className="rounded-[30px]  shadow-box bg-white px-[12px] py-[35px] mx-4 w-[340px]">
                  <div className="flex flex-col items-center justify-between ">
                    <img
                      src={step.imageAddress}
                      alt={`Step ${step.stepNumber}`}
                      width="244px"
                      className="p-[10px]"
                    />
                    <div className="flex items-center justify-center flex-col ">
                      <p className="text-center text-[18px] text-[#585981] p-[18px]">
                        Step {step.stepNumber}
                      </p>
                      <p className="text-center text-[24px] font-bold text-[#094B72]">
                        {step.text}
                      </p>
                      <p className="text-center text-[16px] text-[#8F90A6] max-w-[316px] py-[10px] font-[Archivo] tracking-wide">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="flex  justify-center items-center px-4 md:px-[40px] gap-[20px] lg:gap-[70px] xl:gap-[105px] pt-[30px] pb-[34px] mx-auto">
          <div className="flex gap-2 lg:gap-4 xl:gap-[24px] px-[32px]">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full cursor-pointer hover:bg-[#1DAEFF] ${
                  currentSlide === index + 1 ? " bg-[#1DAEFF]" : " bg-[#E5E5E5]"
                }`}
                onClick={() => {
                  if (swiperInstance && index !== currentSlide - 1) {
                    // Check if swiperInstance exists and the clicked index is not the current slide
                    setCurrentSlide(index + 1); // Update the current slide
                    swiperInstance.slideTo(index); // Move to the selected slide
                  }
                }}
              ></div>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};
