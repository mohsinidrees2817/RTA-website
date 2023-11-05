import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-[#F0F6FF] mt-20 lg:mt-[20px]">
      <div className="flex justify-between items-center max-w-[920px] text-[14px] lg:text-[18px] p-[18px] lg:p-[22px]  mx-auto text-[#8487A5] font-[Archivo] ">
        <p>© 2023 RtA</p>
        <Link
          to="topsection"
          spy={true}
          offset={0}
          smooth={true}
          duration={1000}
        >
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            Back To Top
            <svg
              width="12"
              height="24"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0781 1.41455L18.5781 8.91455C18.8594 9.1958 19 9.5708 19 9.9458C19 10.3677 18.8594 10.7427 18.5781 11.0239C18.0156 11.6333 17.0312 11.6333 16.4687 11.0239L11.5 6.10205L11.5 20.4458C11.5 21.2896 10.8438 21.9458 10 21.9458C9.20312 21.9458 8.5 21.2896 8.5 20.4458L8.5 6.10205L3.57812 11.0239C3.01562 11.6333 2.03125 11.6333 1.46875 11.0239C0.859374 10.4614 0.859374 9.47705 1.46875 8.91455L8.96875 1.41455C9.53125 0.805175 10.5156 0.805175 11.0781 1.41455Z"
                fill="#8487A5"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
