import { useState } from "react";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I upgrade my subscription??",
      answer:
        "To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help.",
    },
    {
      question: "Are the stories safe for my kids?",
      answer:
        "Yes, all our stories are carefully curated and age-appropriate for children. We have strict content guidelines and parental controls to ensure a safe experience.",
    },
    {
      question: "Do I need internet to listen?",
      answer:
        "You can download stories for offline listening. However, browsing new content and syncing progress requires an internet connection.",
    },
    {
      question: "Can parents track reading progress?",
      answer:
        "Yes, parents have access to a comprehensive dashboard that shows reading history, time spent, favorite stories, and learning milestones.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative min-h-screen  bg-white py-16 md:mt-40">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-Qilka mb-15 text-center md:text-[56px] h-[65px] font-bold text-[#231F1E]">
          Questions you may have
        </h2>

        <div className="relative font-abezee text-[24px] tracking-[6%] mx-auto max-w-[720px]">
          
          {/* detective */}
          <div className="absolute -bottom-8 -left-56 hidden w-64 xl:block">
            <img src="detective.png" className="-mb-8" alt="detective" />
          </div>

          {/* doggie*/}
          <div className="absolute -top-33 -right-66 hidden w-48 xl:block">
              <img src="doggie.png" alt="doggie" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-[#FFF2EC] transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#FFF2EC] md:p-8"
                >
                  <span className="flex-1 pr-4 text-lg font-normal text-gray-800 md:text-xl lg:text-2xl">
                    {faq.question}
                  </span>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 transition-all group-hover:bg-orange-200 md:h-14 md:w-14">
                    <span
                      className={`text-3xl font-light text-orange-500 transition-transform duration-300 md:text-4xl ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="border-t-2 border-dashed border-[#ED4F01] pt-4 md:pt-6">
                      <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
