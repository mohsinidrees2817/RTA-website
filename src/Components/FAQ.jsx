import React, { useState } from "react";
import Accordion from "./FAWacordian";
import SectionsLayout from "../Layout/SectionsLayout";
const FAQ = () => {
  const faqData = [
    {
      question: "Will I Really Get Paid?",
      answer:
        "Yes, your commission will be secured by a 3-way contract signed between You, RtA, and the selected Partner, to be signed once you’re accepted as an RtA scout.",
    },
    {
      question: "How and When Will I Receive my Commissions?",
      answer:
        "You’ll receive a one-time fee or recurring commissions based on the type of services your referral contracts with a partner.\n\nFor example:\n\nIf your referral is looking for a new website, that’s a one-time charge. So you’ll get a % of that amount upon successful delivery.\n\nIf your referral is looking for, say, ongoing Social Media Management, then you’ll get a commission, every month, of that contract’s fee, indefinitely. So if a contract expires, but then gets renewed - as long as its amount is the same or bigger than the previous one - you will also get a share of that new contract.",
    },
    {
      question: "How Can I Know If the Partners’ Work is Any Good?",
      answer:
        "You can elect to have a direct meeting with any of the selected partners. In it, they’ll onboard you as they would any customer, showing you the entire process as well as their portfolio and past results.",
    },
    {
      question: "What Type of Businesses Should I Refer?",
      answer:
        "Businesses with online presence at least $100,000 in annual revenue\n\nIs profitable businesses with a compelling product market fit and historic growth. If you know of a company that is outside of this, BUT you really think we should consider, please reach out as we do occasionally make minority investments.",
    },
    {
      question: "Can I Refer Businesses from Any Country?",
      answer:
        "Yes, absolutely.\n\nThe listed Partners have the most experience with English-speaking clients from the USA and UK but have also worked with other clients in Europe and Asia. Just keep in mind that regardless of location, clients must qualify in terms of turnover and business type, in order to be accepted as clients by the partners.",
    },
    {
      question: "Do You Expect Me to Do Outbound Prospecting?",
      answer:
        "Our scouts typically prospect within their own close personal and professional networks.\n\nBut if you do want to do cold outbound, please make sure that you have first sent us the company name and a brief description, and we will let you know if we have previously connected with them to date. Please make it clear in your outbound outreach that you are an RtA Scout, and not an employee.",
    },
  ];

  const sendEmail = () => {
    const emailAddress = "andrew@refertoagency.com";
    const subject = "Contact";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <SectionsLayout
      Title="FAQ"
      Heading="Still Have Questions?"
      Subheading="Get answers to the most Frequently Asked Questions or get in touch
    "
      Id="faq"
      Bgcolor="bg-white"
    >
      <Accordion faqData={faqData} />
      <div className="w-full px-4 pt-8">
        <div
          className={`border-[#1DAEFF] group border lg:border-2 text-[#1DAEFF] text-[18px] font-bold w-full flex justify-between items-center py-[14px] px-[20px] lg:px-[40px] lg:py-[20px] rounded-[12px] lg:rounded-[8px] gap-[16px] hover:bg-[#1DAEFF] hover:text-white transition-all duration-500 linear max-w-[600px] mx-auto cursor-pointer`}
          onClick={() => sendEmail()}
        >
          <p className="whitespace-nowrap">More Questions? Get in Touch</p>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#1DAEFF] -translate-x-1 group-hover:fill-white group-hover:translate-x-1 transition-all duration-500 linear w-[16px]"
            // fill=""
          >
            <path d="M15.4766 8.05859L9.85156 13.6836C9.64062 13.8945 9.35938 14 9.07812 14C8.76172 14 8.48047 13.8945 8.26953 13.6836C7.8125 13.2617 7.8125 12.5234 8.26953 12.1016L11.9609 8.375H1.20312C0.570312 8.375 0.078125 7.88281 0.078125 7.25C0.078125 6.65234 0.570312 6.125 1.20312 6.125H11.9609L8.26953 2.43359C7.8125 2.01172 7.8125 1.27344 8.26953 0.851562C8.69141 0.394531 9.42969 0.394531 9.85156 0.851562L15.4766 6.47656C15.9336 6.89844 15.9336 7.63672 15.4766 8.05859Z" />
          </svg>
        </div>
      </div>
    </SectionsLayout>
  );
};

export default FAQ;
