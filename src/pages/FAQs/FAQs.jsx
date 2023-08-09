import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AppLayout from "../../components/AppLayout/AppLayout";
import SectionHeading from "../../components/SectionHeading";
import FAQ_LIST from "./FAQsList";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQs() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <AppLayout>
      <div className="mt-10">
        <SectionHeading title="FAQs" />
      </div>
      <div className="container mx-auto lg:w-3/5 md:w-4/5 sm:px-0 px-4 mb-16">
        {FAQ_LIST.map((faqGroup) => (
          <div key={faqGroup.heading}>
            <h2 className="sm:text-lg text-base font-semibold my-4 uppercase">{faqGroup.heading}</h2>
            {faqGroup.questions.map((faq) => (
              <Accordion key={faq.id} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
                <AccordionHeader className="transition duration-300 ease-in-out hover:text-[#74322c] focus:text-[#74322c] font-medium sm:text-lg text-base hover:bg-pink-50 p-4 sm:mb-5 mb-3 focus:bg-pink-50 rounded-lg" onClick={() => handleOpen(faq.id)}>{faq.question}</AccordionHeader>
                <AccordionBody>{faq.answer}</AccordionBody>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
