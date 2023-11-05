import React from "react";
import Slider from "./Slider";
import Button from "./Button";
import SectionsLayout from "../Layout/SectionsLayout";
const Howitworks = () => {
  const steps = [
    {
      stepNumber: 1,
      text: "You Know Someone",
      description:
        "That Someone has a business and is looking for World Class Marketing Services: Branding, Web Design & Development, Digital Advertising, Content & Creators, SEO, you name it.",
      imageAddress: "./assets/animations/animation1.svg",
    },
    {
      stepNumber: 2,
      text: "You Introduce Them",
      description:
        "You believe one of our vetted partners could be the right fit, so you get in touch by filling the form below. We will then agree on the terms by which the introduction will happen and how you’ll get paid.",
      imageAddress: "./assets/animations/animation2.svg",
    },
    {
      stepNumber: 3,
      text: "We’ll Work the Deal",
      description:
        "Once we define how you prefer to proceed, we will dive into a conversation with your referral and the selected partner, overviewing the deal and brokering your share.",
      imageAddress: "./assets/animations/animation3.svg",
    },
    {
      stepNumber: 4,
      text: "You’ll Get Paid",
      description:
        "Once a deal is achieved, with the signatures on paper, we will be in touch with you to share the final terms of the agreement and send you your cut or set up your recurring commissions.",
      imageAddress: "./assets/animations/animation4.svg",
    },
  ];

  return (
    <SectionsLayout
      Title="How it works"
      Heading="All On Your Terms"
      Subheading="You Choose How to Get Paid and Who to Recommend"
      Id="how-it-works"
      Bgcolor="bg-white"
    >
      <div className="p-[20px] md:p-[30px] lg:p-[40px] xl:p-[52px] w-full hidden lg:block  ">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="flex items-center justify-between max-w-[970px] mx-auto "
          >
            <div className="flex items-start justify-start flex-col ">
              <p className="text-start  text-[20px] font-[BauzietNormal]  tracking-wide text-[#585981]">
                Step {step.stepNumber}
              </p>
              <p className="text-start text-[32px] font-bold text-[#094B72] tracking-wide">
                {step.text}
              </p>
              <p className="text-start text-[18px] font-[Archivo] tracking-wide text-[#8F90A6] max-w-[548px] leading-6">
                {step.description}
              </p>
            </div>
            <img src={step.imageAddress} alt={`Step ${step.stepNumber}`} className="" />
          </div>
        ))}
      </div>
      <div className="w-full p-0 lg:hidden py-[10px] ">
        <Slider steps={steps} />
      </div>
      <div className="bg-[#094B72] px-[40px] lg:mt-[40px] lg:mb-[12px] py-[40px] md:px-[60px] lg:py-[30px] w-full max-w-[970px] mx-auto lg:rounded-[30px] flex flex-col justify-start items-start">
        <p className="text-[24px] lg:text-[26px] py-[10px] text-start text-white max-w-[250px] md:max-w-[800px] font-[BauzietNormal]  tracking-wide">
          You're the One <br className="md:hidden" />
          With the Business?
        </p>
        <p className="text-[16px] lg:text-[18px] font-[Archivo]  tracking-wide text-start text-[#BABBCA] max-w-[780px] leading-6">
          Through RtA, you can work with the best at discounted rates.
          <br className="hidden lg:block" /> Browse through the Partners listed
          below, and if there’s one that’s a good fit for you, get in touch and
          we’ll broker the deal to get you up to 20% Off, on any of their
          regular service fees.
        </p>
        <div className="pt-[24px] w-full">
          <Button text="Start Today" link="join-form" />
        </div>
      </div>
    </SectionsLayout>
  );
};

export default Howitworks;
