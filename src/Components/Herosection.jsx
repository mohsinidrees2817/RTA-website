import React from "react";
import Header from "./Header";
import { Link } from "react-scroll";
const Herosection = () => {
  return (
    <div
      className="mx-auto  px-[12px] md:px-12 lg:px-12 xl:px-[62px] py-[24px] xl:py-[44px] gradient text-white  flex flex-col justify-start "
      id="topsection"
    >
      <Header />
      <div className="w-full flex flex-col items-center justify-center min-h-[550px] lg:min-h-[600px] ">
        <div className="flex flex-col justify-center items-center h-full  transition-all ease-in-out duration-500">
          <p className="text-[16px]  max-w-[200px] md:max-w-[500px] lg:max-w-[600px] lg:text-[22px] pb-[25px]  lg:pb-[46px] custom-underline leading-7 lg:leading-6 font-[Archivo] transition-all ease-in-out duration-500 tracking-wide">
            Know Somebody Looking for a Marketing Agency?
          </p>
          <div className=" text-[30px] md:text-[36px] lg:text-[46px] xl:text-[58px] lg:max-w-[1000px] w-full leading-8 md:leading-10 lg:leading-[3rem] xl:leading-[4rem] transition-all ease-in-out duration-500 ">
            <span className=" text-center  font-[BauzietNormal]">
              Recommend Great Services,
              <br className="breakline" />
            </span>
            <span
              className="text-center font-bold    "
              style={{
                background:
                  "linear-gradient(transparent 65%, rgba(23, 141, 208, 0.50) 50%)",
              }}
            >
              <span className="">&nbsp;</span>Get Lifetime Commissions
              <span className="">&nbsp;</span>
            </span>
          </div>
        </div>
        <p className="max-w-[800px] px-[2px] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[24px] mx-2 py-[25px]  lg:py-[46px]  leading-[1.6rem] text-center lg:leading-[1.7rem] font-[Archivo] tracking-wide">
          RtA Aggregates the Best Service Providers in Marketing Right Now.
          Recommend them customers, and get up to 20% of the service fees, for
          as long as they remain a customer.
        </p>
        <Link to="partners" spy={true} smooth={true} duration={500}>
          <div className="px-[30px]  py-[22px] rounded-[12px] text-[18px] lg:text-[24px]   font-bold cursor-pointer bg-[#1DAEFF] hover:bg-white my-[16px] hover:text-[#1173ab]   transition-all duration-500 linear leading-5 lg:leading-[1.5rem]	tracking-wide ">
            See Who You'll Recommend
          </div>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Herosection;
