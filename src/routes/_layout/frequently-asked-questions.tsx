import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/FaqComponent";
import { useState } from "react";
export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

const faqs = [
  {
    question: "How do I upgrade my subscription?",
    answer: "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
  },
  {
    question: "Are the stories safe for my kids?",
    answer: "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
  },
  {
    question: "Do I need internet to listen?",
    answer: "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
  },
  {
    question: "Can parents track reading progress?",
    answer: "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
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
    const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col items-center p-3">
      <h1 className="font-Qilka text-center text-3xl md:text-[56px] leading-[68px] text-[#3F1102]">Frequently asked questions</h1>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-[100px] pl-4 md:pl-11 py-4 md-py-11 mt-[29px] w-full max-w-[620px] h-[47px] md:h-[61px] font-abezee text-[16px] md:text-[21px] leading-9"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="mt-12 flex gap-4 w-full md:max-w-full max-w-[620px] overflow-x-auto whitespace-nowrap text-[15px] leading-9 font-abezee text-[#3F1102] px-2 scrollbar-hide lg:justify-center">
  {categories.map((c) => (
    <li
      key={c}
      onClick={() => setCategory(c)}
      className={`
        min-w-fit h-10 rounded-[20px] px-[21px] py-1 cursor-pointer
        ${category === c ? "bg-[#EC4007] text-white" : "bg-[#E8E4E4] text-[#3F1102]"}
      `}
    >
      {c}
    </li>
  ))}
</ul>
      <div className="mt-[61px] flex flex-col gap-8 w-full max-w-[620px]">
        {filteredFaqs.map((faq, index) => (
          <FaqComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}
