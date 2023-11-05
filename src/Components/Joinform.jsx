import React, { useState, useRef } from "react";
// import scrollToSection from "../utils/scrollUtils";
import { scrollToSection } from "../utils/scrollUtils";
const Joinform = ({ partner, setPartners }) => {
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [businessSize, setBusinessSize] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();
  const [issizeOpen, setIssizeOpen] = useState(false);
  const [ispartnerOpen, setIspartnerOpen] = useState(false);

  const [buttontext, setButtontext] = useState("Submit");

  const bussinessoptions = [
    "$100,000 - $200,000",
    "$200,000 - $500,000",
    "$500,000 - $1,000,000",
    "+ $1,000,000",
    "Not Sure",
  ];

  const companyoptions = ["MOB", "222", "Delante", "Not Sure, Yet"];

  const handlesizeOptionClick = (value) => {
    setBusinessSize(value);
    setIssizeOpen(false);
  };

  const handlepartnerOptionClick = (value) => {
    setPartners(value);
    setIspartnerOpen(false);
  };

  const handleSubmit = (e) => {
    setButtontext("Submitting");
    e.preventDefault();
    fetch("https://sheetdb.io/api/v1/oxq5dyjz3xd5w", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Name: name,
            Email: email,
            Country: country,
            Phone: phone,
            BussinessSize: businessSize,
            Partners: partner,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsFormSubmitted(true);
        scrollToSection("join-form");
      })
      .catch((error) => {
        console.error(error);
        setButtontext(error);
      });
  };

  return (
    <div
      className="px-6 transition-all ease-in-out duration-500  flex flex-col justify-center items-center bg-[#094B72]"
      id="join-form"
    >
      <div className="max-w-[1380px] mx-auto py-10 px-4 flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center gap-2"
          id="how-it-works"
        >
          <p className="text-[16px]  md:text-[18px] lg:text-[20px] custom-underline text-center   font-[Archivo] tracking-wide text-[#A5A6BA]  pt-4 ">
            Start Now
          </p>
          <p className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-bold text-center text-white leading-10 md:leading-normal ">
            Join RtA <br className=" sm:hidden" /> Scout Network
          </p>
          <p className="text-[16px] md:text-[18px]  xl:text-[20px] text-[#A5A6BA]  text-center md:leading-normal font-[Archivo] tracking-wide   max-w-[360px]  sm:max-w-[600px] ">
            Help us learn about you and your referrals by filling the form. We
            will review and get back to you within 2 business days{" "}
          </p>
        </div>
      </div>

      {isFormSubmitted ? (
        <p className="text-[16px] mb-20 transition-all ease-in-out duration-500 md:text-[16px] text-[#094B72]  bg-white px-[22px] py-[22px] max-w-[1000px] rounded-[8px] font-[Archivo]">
          Looking forward to learning more about you and getting a countersigned
          scout agreement on file. Once you have submitted, we will review and
          get back to you within 2 business days.
        </p>
      ) : (
        <form
          className="form transition-all ease-in-out duration-500 flex flex-col text-[16px] xl:text-[20px] font-bold  max-w-[850px] w-full  items-center justify-center mx-auto"
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            required
            className=" bg-transparent border-b-[2px]  border-[#A5A6BA] pt-[24px] pb-[18px] lg:pt-[30px] lg:pb-[27px]  text-[#A5A6BA] w-full focus:outline-none placeholder:text-[#A5A6BA] "
            placeholder="Your Name *"
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            required
            className=" bg-transparent border-b-[2px]  border-[#A5A6BA] pt-[24px] pb-[18px] lg:pt-[30px] lg:pb-[27px]  text-[#A5A6BA] w-full focus:outline-none placeholder:text-[#A5A6BA]"
            placeholder="Your Email *"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className=" bg-transparent border-b-[2px]  border-[#A5A6BA] pt-[24px] pb-[18px] lg:pt-[30px] lg:pb-[27px]  text-[#A5A6BA] w-full focus:outline-none placeholder:text-[#A5A6BA]"
            placeholder="Country*"
            type="text"
            name="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            required
            className=" bg-transparent border-b-[2px]  border-[#A5A6BA] pt-[24px] pb-[18px] lg:pt-[30px] lg:pb-[27px]  text-[#A5A6BA] w-full focus:outline-none placeholder:text-[#A5A6BA]"
            placeholder="Phone/Whatsapp*"
            type="text"
            name="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="w-full relative border-b-[2px]  border-[#A5A6BA] ">
            <div
              className="bg-transparent  text-[#A5A6BA] w-full focus:outline-none flex justify-between items-center cursor-pointer "
              onClick={() => setIssizeOpen(!issizeOpen)}
            >
              <textarea
                className="placeholder:text-[#A5A6BA] pt-[30px] w-full text-start outline-none border-0 cursor-pointer  bg-[#084b72]   focus:outline-none pointer-events-none pb-2 lg:pb-0 "
                name="business_size"
                value={businessSize}
                placeholder="What is the Size of your Referred Business?*"
                required
              />
              <svg
                width="20"
                height="10"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4 transform  transition-all linear duration-1000 fill-white"
                style={{
                  transform: issizeOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <path d="M23.625 2.25C23.625 2.70703 23.4727 3.11328 23.168 3.41797L13.418 13.168C12.8086 13.8281 11.7422 13.8281 11.1328 13.168L1.38281 3.41797C0.722655 2.80859 0.722655 1.74219 1.38281 1.13281C1.99219 0.472656 3.05859 0.472656 3.66797 1.13281L12.25 9.71484L20.8828 1.13281C21.4922 0.472655 22.5586 0.472655 23.168 1.13281C23.4727 1.4375 23.625 1.84375 23.625 2.25Z" />
              </svg>
            </div>
            <div
              className={`  
            transition-all linear duration-500  overflow-hidden `}
              style={{
                opacity: issizeOpen ? 1 : 0,
                maxHeight: issizeOpen ? "9em" : 0,
                transition: "all 400ms linear",
              }}
            >
              {bussinessoptions.map((option, index) => (
                <p
                  key={index}
                  className="py-2 px-2  cursor-pointer text-[#A5A6BA] text-start text-[14px] xl:text-[20px] font-normal"
                  onClick={() => handlesizeOptionClick(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full relative border-b-[2px]  border-[#A5A6BA] ">
            <div
              className="bg-transparent  text-[#A5A6BA] w-full focus:outline-none flex justify-between items-center cursor-pointer"
              onClick={() => setIspartnerOpen(!ispartnerOpen)}
            >
              <textarea
                className={`placeholder:text-[#A5A6BA] pt-[30px] w-full text-start outline-none border-0 cursor-pointer  bg-[#084b72]   focus:outline-none pointer-events-none  pb-2 lg:pb-0 `}
                name="business_size"
                value={partner}
                placeholder="Which partner would you like to work with?*"
                required
              />
              <svg
                width="20"
                height="10"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4 transform  transition-all linear duration-1000 fill-white"
                style={{
                  transform: ispartnerOpen ? " rotate(180deg)" : "rotate(0)",
                }}
              >
                <path d="M23.625 2.25C23.625 2.70703 23.4727 3.11328 23.168 3.41797L13.418 13.168C12.8086 13.8281 11.7422 13.8281 11.1328 13.168L1.38281 3.41797C0.722655 2.80859 0.722655 1.74219 1.38281 1.13281C1.99219 0.472656 3.05859 0.472656 3.66797 1.13281L12.25 9.71484L20.8828 1.13281C21.4922 0.472655 22.5586 0.472655 23.168 1.13281C23.4727 1.4375 23.625 1.84375 23.625 2.25Z" />
              </svg>
            </div>

            <div
              className={`  
             transition-all linear duration-500   overflow-hidden  `}
              style={{
                opacity: ispartnerOpen ? 1 : 0,
                maxHeight: ispartnerOpen ? "9em" : 0,
                transition: "all 400ms linear",
              }}
            >
              {companyoptions.map((option, index) => (
                <p
                  key={index}
                  className="py-2  cursor-pointer text-[#A5A6BA] text-start text-[14px] xl:text-[20px] font-normal px-2"
                  onClick={() => handlepartnerOptionClick(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          </div>

          <button
            className={`mt-[50px] mb-[50px]   border-[1px] lg:border-[1px] border-[#1DAEFF] group text-[#1DAEFF] text-[18px] lg:text-[20px] font-bold w-full flex justify-between items-center py-[14px] px-[25px] lg:px-[27px] rounded-[16px] lg:rounded-[8px] gap-[16px] hover:bg-[#1DAEFF] hover:text-white transition-all duration-500 linear  max-w-[256px] lg:leading-9 shadow-box-sm`}
            type="submit"
          >
            <p>{buttontext}</p>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#1DAEFF] -translate-x-1 group-hover:fill-white group-hover:translate-x-1 transition-all duration-500 linear"
              // fill=""
            >
              <path d="M15.4766 8.05859L9.85156 13.6836C9.64062 13.8945 9.35938 14 9.07812 14C8.76172 14 8.48047 13.8945 8.26953 13.6836C7.8125 13.2617 7.8125 12.5234 8.26953 12.1016L11.9609 8.375H1.20312C0.570312 8.375 0.078125 7.88281 0.078125 7.25C0.078125 6.65234 0.570312 6.125 1.20312 6.125H11.9609L8.26953 2.43359C7.8125 2.01172 7.8125 1.27344 8.26953 0.851562C8.69141 0.394531 9.42969 0.394531 9.85156 0.851562L15.4766 6.47656C15.9336 6.89844 15.9336 7.63672 15.4766 8.05859Z" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
};

export default Joinform;
