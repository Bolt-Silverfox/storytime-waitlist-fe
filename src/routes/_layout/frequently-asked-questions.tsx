import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/FaqComponent";
import { useState } from "react";
export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

const faqs = [
  {
    question: "How do I upgrade my subscription?",
    answer:
      "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
  },
  {
    question: "Are the stories safe for my kids?",
    answer:
      "Yes. All stories are carefully curated to be kid-friendly, age-appropriate, and supported by parental controls to ensure a safe listening experience.",
  },
  {
    question: "Do I need internet to listen?",
    answer: "Yes, you need an internet connection to stream stories.",
  },
  {
    question: "Can parents track reading progress?",
    answer:
      "Yes. Parents can view each child's activity and use profiles and controls to monitor what they're listening to.",
  },
];

const categories = [
  "For Parents",
  "Using the app",
  "Stories and audio",
  "Safety and privacy",
  "Subscription and billing",
];

function RouteComponent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("For Parents");

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch = f.question
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="relative z-0 w-full">
      {/* LEFT IMAGE — detective at bottom */}
      <img
        src="detective.png"
        alt="detective"
        className="absolute bottom-0 left-0 z-0 hidden h-[350px] w-[350px] object-contain md:block"
      />

      <img
        src="doggie.png"
        alt="doggie"
        className="absolute top-[300px] right-0 z-0 hidden h-[250px] w-[250px] object-cover md:block"
      />
      <div className="relative z-10 mt-8 flex flex-1 flex-col items-center px-4 py-10">
        <h1 className="font-Qilka text-center text-4xl leading-10 text-[#231F1E] md:text-[56px]">
          Frequently asked questions
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="md-py-11 font-abezee mt-6 h-[47px] w-full max-w-[620px] rounded-[100px] border py-4 pl-4 text-[16px] leading-9 md:mt-[29px] md:h-[61px] md:pl-11 md:text-[21px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="font-abezee scrollbar-hide mt-12 flex w-full max-w-[620px] items-center gap-4 overflow-x-auto px-2 text-[15px] leading-9 whitespace-nowrap text-[#3F1102] md:max-w-full lg:justify-center">
          {categories.map((c) => (
            <li
              key={c}
              onClick={() => setCategory(c)}
              className={`h-auto min-w-fit cursor-pointer rounded-full px-[21px] py-1 ${category === c ? "bg-[#EC4007] text-white" : "border border-[#4F4C4B] text-[#4F4C4B]"} `}
            >
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-[61px] flex w-full max-w-[620px] flex-col gap-5 md:gap-8">
          {filteredFaqs.map((faq, index) => (
            <FaqComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
