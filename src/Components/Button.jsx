import React from "react";
import { Link } from "react-scroll";
const Button = ({
  text,
  width,
  link,
  setPartner,
  partnername,
  isautofillpartner,
}) => {
  const scrollToSection = () => {
    isautofillpartner && setPartner(partnername);
  };
  return (
    <Link to={link} spy={true} offset={0} smooth={true} duration={500}>
      <div
        className={`border-[#1DAEFF] group border text-[#1DAEFF] text-[18px] font-bold w-full flex justify-between items-center py-[14px] px-[24px] lg:px-[12px] lg:py-[12px] rounded-[16px] lg:rounded-[8px] gap-[16px] hover:bg-[#1DAEFF] hover:text-white transition-all duration-500  linear ${
          width ? "lg:max-w-[350px] w-full" : "lg:max-w-[167px]  w-full whitespace-nowrap "
        }  cursor-pointer`}
        onClick={() => scrollToSection(link)}
      >
        <p className="whitespace-nowrap">{text}</p>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#1DAEFF] -translate-x-1 group-hover:fill-white group-hover:translate-x-1 transition-all duration-500 linear w-[66px]"
        >
          <path d="M15.4766 8.05859L9.85156 13.6836C9.64062 13.8945 9.35938 14 9.07812 14C8.76172 14 8.48047 13.8945 8.26953 13.6836C7.8125 13.2617 7.8125 12.5234 8.26953 12.1016L11.9609 8.375H1.20312C0.570312 8.375 0.078125 7.88281 0.078125 7.25C0.078125 6.65234 0.570312 6.125 1.20312 6.125H11.9609L8.26953 2.43359C7.8125 2.01172 7.8125 1.27344 8.26953 0.851562C8.69141 0.394531 9.42969 0.394531 9.85156 0.851562L15.4766 6.47656C15.9336 6.89844 15.9336 7.63672 15.4766 8.05859Z" />
        </svg>
      </div>
    </Link>
  );
};

export default Button;
