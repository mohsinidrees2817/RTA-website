// Header.js
import React from "react";
import { Link } from "react-scroll";
function Header() {
  const navlist = [
    { id: "how-it-works", label: "How it Works" },
    { id: "partners", label: "Partners" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <header className="max-w-[1366px] mx-auto w-full " id="header">
      <nav className="flex justify-center md:justify-between items-center ">
        <img
          src="./assets/logos/rtalogo.svg"
          alt=""
          className="cursor-pointer w-[90px] md:w-[107px]"
        />
        <ul className="md:flex justify-center items-center  gap-8 xl:gap-12 hidden ">
          {navlist.map((item, index) => (
           <li
           className="px-2 text-white text-[16px] cursor-pointer transition-all linear duration-500  tracking-wide li" // Add the "li" class
           key={index}
         >
           <Link
             to={item.id}
             spy={true}
             offset={0}
             smooth={true}
             duration={500}
           >
             {item.label}
           </Link>
         </li>
          ))}

          <button className="text-[16px]  text-[#1DAEFF] border-[#1DAEFF] border-[2px]  rounded-[8px] px-4 py-3 hover:bg-white hover:text-[#1174ab] hover:border-[#1174ab] transition-all tracking-wide duration-500 ease-in-out ">
            <Link to="join-form" spy={true} smooth={true} duration={500}>
              Start Today
            </Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
