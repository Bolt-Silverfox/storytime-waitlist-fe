import { useState } from "react";
import { motion } from "framer-motion";
import FaqComponent from "./FaqComponent";

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

        <div
          className="font-abezee relative mx-auto max-w-[720px] text-[24px] tracking-[6%]"
          style={{ overflow: "visible" }}
        >
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
              <FaqComponent
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
