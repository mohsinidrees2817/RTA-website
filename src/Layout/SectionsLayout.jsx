import React from "react";

const SectionsLayout = ({ children, ...props }) => {
  return (
    <div id={props.Id} className={`${props.Bgcolor}`}>
      <div className="max-w-[1380px] mx-auto pt-10 lg:py-12  flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center gap-2"
          id="how-it-works"
        >
          <p className="text-[16px]  md:text-[18px] lg:text-[20px] pt-4 custom-underline text-center  text-[#585981] font-[Archivo] tracking-wide ">
            {props.Title}
          </p>
          <p className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-bold text-center text-[#094B72] leading-10 md:leading-normal max-w-[250px] sm:max-w-full ">
            {props.Heading}
          </p>
          <p className="text-[16px] md:text-[18px]  xl:text-[20px] text-[#585981] max-w-[265px]  md:max-w-[1480px] text-center md:leading-normal  font-[Archivo] tracking-wide">
            {props.Subheading}
          </p>
        </div>
        <div className=" lg:py-4 w-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

// Title, Heading, Subheading,

export default SectionsLayout;
