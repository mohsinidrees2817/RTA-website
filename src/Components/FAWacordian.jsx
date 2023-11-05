import React, { useState } from "react";

const AccordionItem = ({ title, content, expanded, onClick }) => (
  <div className={`accordion-item ${expanded ? "expanded" : ""} lg:px-4 `}>
    <p aria-expanded={expanded} onClick={onClick} className="flex w-full gap-2 ">
      <span className="accordion-title   w-full text-[16px] xl:text-[20px] font-bold ">
        {title}
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-18 h-18 fill-none transform-gpu duration-500  ${
          expanded ? "rotate-[225deg]" : ""
        }`}
      >
        <path
          opacity="0.7"
          d="M6.78613 17.4971V11.1719H0.411133V6.80566H6.78613V0.480469H11.0361V6.80566H17.4277V11.1719H11.0361V17.4971H6.78613Z"
          fill="#094B72"
        />
      </svg>
    </p>
    <div
      className="accordion-content"
      style={{
        opacity: expanded ? 1 : 0,
        maxHeight: expanded ? "30em" : 0,
        transition: "all 500ms linear"
      }}
    >
      <p className="font-[Archivo] ">{content}</p>
    </div>
  </div>
);

const Accordion = ({ faqData }) => {
  const [expanded, setExpanded] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <div className=" px-6 py-8 md:py-12">
      <div className="accordion max-w-[962px] border-t-[4px] border-dotted">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.question}
            content={faq.answer}
            expanded={expanded[index]}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
