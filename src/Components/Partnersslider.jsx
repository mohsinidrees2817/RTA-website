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
import Button from "./Button";

//   SwiperCore.use([Autoplay]);

export default ({ companies, setPartner }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="mx-auto pt-[30px]">
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
        // modules={[EffectCoverflow, Pagination, Navigation]}
        className=""
      >
        {companies.map((company, index) => {
          return (
            <SwiperSlide key={index} className="  ">
              <div className="flex justify-center items-center transition-all duration-300 linear">
                <div className="rounded-[30px]  shadow-box bg-white px-[20px] py-[30px] mx-4 w-[340px]">
                  <div className="flex flex-col justify-between min-h-[570px]  border-">
                    <div className="">
                      <div className="flex justify-start items-center gap-[20px]">
                        <img
                          src={company.imagesmall}
                          alt={`Step ${company.name}`}
                          width="85px"
                        />
                        <div className="flex flex-col justify-start items-start gap-[10px]">
                          <p className="text-start  text-[20px] font-bold text-[#094B72]">
                            {company.name}
                          </p>
                          <div className="flex justify-center items-center flex-nowrap gap-[12px]">
                            {company.value && (
                              <p className="text-[11px] font-[Archivo] text-[#242424] px-[6px] py-[6px] rounded-[6px] bg-[#9DCF62] whitespace-nowrap">
                                {company.value}
                              </p>
                            )}
                            {company.trending && (
                              <p className=" text-[11px] font-[Archivo] text-[#242424] max-w-[548px] px-[12px] py-[6px] rounded-[6px] whitespace-nowrap  bg-[#F2C947]">
                                {company.trending}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start flex-col ">
                        <p className="text-[16px] max-w-[585px] text-start py-[20px]  text-[#585981] font-[Archivo]">
                          {company.description}
                        </p>
                        <ul className="flex font-[Archivo] flex-wrap justify-start items-start gap-[10px]">
                          {company.services.map((service, serviceIndex) => (
                            <p
                              key={serviceIndex}
                              className="text-[#585981] w-[66px] text-[9px] py-[6px] bg-[#ECF1F8] rounded-[4px]"
                            >
                              {service}
                            </p>
                          ))}
                        </ul>
                        <div className="flex font-[Archivo] justify-start items-start gap-[16px] flex-wrap py-[33px]">
                          <div className="flex gap-[8px] justify-center items-center ">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="8.5"
                                cy="8.5"
                                r="8.5"
                                fill="#8F90A6"
                              />
                              <path
                                d="M13.2656 5.98438C13.5703 6.26562 13.5703 6.75781 13.2656 7.03906L7.26562 13.0391C6.98438 13.3438 6.49219 13.3438 6.21094 13.0391L3.21094 10.0391C2.90625 9.75781 2.90625 9.26562 3.21094 8.98438C3.49219 8.67969 3.98438 8.67969 4.26562 8.98438L6.72656 11.4453L12.2109 5.98438C12.4922 5.67969 12.9844 5.67969 13.2656 5.98438Z"
                                fill="white"
                              />
                            </svg>
                            <p className="text-[#8F90A6] text-[14px]">
                              {company.commission}
                            </p>
                          </div>
                          <div className="flex gap-[8px]  justify-center items-center ">
                            <svg
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.625 7.75C9.625 8.37891 9.57031 8.95312 9.51562 9.5H4.45703C4.40234 8.95312 4.34766 8.37891 4.34766 7.75C4.34766 7.14844 4.40234 6.57422 4.45703 6H9.51562C9.57031 6.57422 9.625 7.14844 9.625 7.75ZM13.7539 6C13.918 6.57422 14 7.14844 14 7.75C14 8.37891 13.918 8.95312 13.7539 9.5H10.3906C10.4453 8.95312 10.5 8.35156 10.5 7.75C10.5 7.14844 10.4453 6.57422 10.3906 6H13.7539ZM13.4805 5.125H10.2812C10.0078 3.40234 9.46094 1.92578 8.77734 0.996094C10.9102 1.57031 12.6602 3.10156 13.4805 5.125ZM9.40625 5.125H4.56641C4.73047 4.14062 5.00391 3.26562 5.30469 2.55469C5.60547 1.89844 5.90625 1.43359 6.23438 1.13281C6.53516 0.859375 6.78125 0.75 7 0.75C7.19141 0.75 7.4375 0.859375 7.73828 1.13281C8.06641 1.43359 8.36719 1.89844 8.66797 2.55469C8.96875 3.26562 9.24219 4.14062 9.40625 5.125ZM0.492188 5.125C1.3125 3.10156 3.0625 1.57031 5.19531 0.996094C4.51172 1.92578 3.96484 3.40234 3.69141 5.125H0.492188ZM3.58203 6C3.52734 6.57422 3.47266 7.14844 3.47266 7.75C3.47266 8.35156 3.52734 8.95312 3.58203 9.5H0.21875C0.0546875 8.95312 0 8.37891 0 7.75C0 7.14844 0.0546875 6.57422 0.21875 6H3.58203ZM5.30469 12.9727C5.00391 12.2617 4.73047 11.3867 4.56641 10.375H9.40625C9.24219 11.3867 8.96875 12.2617 8.66797 12.9727C8.36719 13.6289 8.06641 14.0938 7.73828 14.3945C7.4375 14.668 7.19141 14.75 6.97266 14.75C6.78125 14.75 6.53516 14.668 6.23438 14.3945C5.90625 14.0938 5.60547 13.6289 5.30469 12.9727ZM5.19531 14.5312C3.0625 13.957 1.3125 12.4258 0.492188 10.375H3.69141C3.96484 12.125 4.51172 13.6016 5.19531 14.5312ZM8.77734 14.5312C9.46094 13.6016 10.0078 12.125 10.2812 10.375H13.4805C12.6602 12.4258 10.9102 13.957 8.77734 14.5312Z"
                                fill="#8F90A6"
                              />
                            </svg>
                            <a
                              href={company.websiteaddress}
                              target="_blank"
                              className="text-[#8F90A6] text-[14px] underline"
                            >
                              {company.website}
                            </a>
                          </div>
                          <div className="flex gap-[8px] justify-center items-center">
                            <img src="./assets/icons/ceoicon.svg" alt="" />
                            <p className="text-[#8F90A6] text-[14px] underline">
                              {company.contactName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-[6px]">
                      <Button
                        text="Recommend"
                        link="join-form"
                        setPartner={setPartner}
                        partnername={company.name}
                        isautofillpartner={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="flex justify-center items-center px-4 md:px-[40px] gap-[20px] lg:gap-[70px] xl:gap-[105px] p-[26px] mx-auto mt-4">
          <div className="flex gap-2 lg:gap-4 xl:gap-[24px] px-[32px]">
            {companies.map((_, index) => (
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
