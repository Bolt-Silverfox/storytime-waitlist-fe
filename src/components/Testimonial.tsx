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
    <section className="md:max-w-7xl mt-20 md:mt-40 mx-auto px-4">
      <div className="container ">
        <h2 className="font-Qilka mb-8 md:mb-15 text-center text-[32px] md:text-[56px] font-bold text-[#231F1E]">
          What people are saying
        </h2>

        {/* mobile */}
        <div className="block lg:hidden overflow-x-auto flex gap-4 scroll-smooth snap-x snap-mandatory pb-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-start min-w-[278px] h-[300px]  rounded-[20px] flex flex-col justify-between bg-[#FFF2EC] p-6 shadow-lg"
            >
              <div className="font-abezee text-6xl text-[#ED4F01]">“</div>
              <p className="font-abezee text-base leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="font-bold mt-4 font-Qilka text-gray-800 text-sm">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* large screens */}
        <div className="hidden lg:grid mx-auto w-full grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[20px]  flex flex-col justify-between bg-[#FFF2EC] w-[400px] p-6 shadow-lg h-[288px]"
            >
              <div className="font-abezee text-[100px] leading-none  text-[#ED4F01]">
                “
              </div>
              <p className="font-abezee text-[18px] leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="font-bold mt-4 font-Qilka text-gray-800 text-base">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
