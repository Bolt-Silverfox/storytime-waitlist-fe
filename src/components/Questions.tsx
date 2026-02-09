import { motion } from "framer-motion";
import FaqComponent from "./FaqComponent";

export default function Questions() {
  const faqs = [
    {
      question: "What is Storytime?",
      answer:
        "Storytime is a kids’ storytelling app with a library of narrated and read-along stories designed for learning, fun, and bedtime routines. Parents can pick stories by age, theme, or length and play them anytime the device is online.",
    },
    {
      question: "Are the stories safe for my kids?",
      answer:
        "Yes. Storytime is built for kids. Our stories are selected and organized for age-appropriate listening/reading. If you ever find something you don’t like, you can report it and we’ll review it.",
    },
    {
      question: "Do I need the internet to read and listen to stories?",
      answer:
        "Yes. You need an internet connection to read or listen to stories on Storytime.",
    },
    {
      question: "Can I download stories to use offline?",
      answer:
        "No — Storytime doesn’t support offline downloads right now. To access stories, you’ll need an internet connection.",
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
