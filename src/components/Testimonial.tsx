import { motion } from "framer-motion";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote:
        "My kids love the gentle voices and colorful stories. They actively look forward to bedtime now!",
      author: "Chidinma - Mom of 2",
    },
    {
      id: 2,
      quote:
        "My kids love the gentle voices and colorful stories. They actively look forward to bedtime now!",
      author: "Chidinma - Mom of 2",
    },
    {
      id: 3,
      quote:
        "My kids love the gentle voices and colorful stories. They actively look forward to bedtime now!",
      author: "Chidinma - Mom of 2",
    },
  ];

  return (
    <section className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-8 text-center text-[32px] font-bold text-[#231F1E] md:mb-15 md:text-[56px]"
      >
        What people are saying
      </motion.h2>

      {/* mobile */}
      <div className="block flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 lg:hidden">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex h-[300px] min-w-[278px] snap-start flex-col justify-between rounded-[20px] bg-[#FFF2EC] p-6 shadow-lg"
          >
            <div className="font-abezee text-6xl text-[#ED4F01]">“</div>
            <p className="font-abezee text-base leading-relaxed">
              {testimonial.quote}
            </p>
            <p className="font-Qilka mt-4 text-sm font-bold text-gray-800">
              {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>

      {/* large screens */}
      <div className="mx-auto hidden w-full grid-cols-3 gap-6 lg:grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "backOut" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex h-[288px] w-[400px] flex-col justify-between rounded-[20px] bg-[#FFF2EC] p-6 shadow-lg"
          >
            <div className="font-abezee text-[100px] leading-none text-[#ED4F01]">
              “
            </div>
            <p className="font-abezee text-[18px] leading-relaxed">
              {testimonial.quote}
            </p>
            <p className="font-Qilka mt-4 text-base font-bold text-gray-800">
              {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
