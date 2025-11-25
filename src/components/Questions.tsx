import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative mt-20 bg-white md:mt-40">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-Qilka mb-15 h-[65px] text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
        >
          Questions you may have
        </motion.h2>

        <div className="font-abezee relative mx-auto max-w-[720px] text-[24px] tracking-[6%]">
          {/* detective */}
          <div className="absolute -bottom-20 -left-96 hidden max-w-[700px] xl:block">
            <img
              src="detective.png"
              className="h-[517px] w-full"
              alt="detective"
            />
          </div>

          {/* doggie*/}
          <div className="absolute -top-33 -right-[360px] hidden max-w-[700px] xl:block">
            <img src="doggie.png" className="h-[676px] w-full" alt="doggie" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="z-10 overflow-hidden rounded-3xl bg-[#FFF2EC] transition-all"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
