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
    <section className="md:max-w-[1256px] mt-20 md:mt-40 mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="font-Qilka mb-8 md:mb-15 text-center text-3xl md:text-[56px] font-bold text-[#231F1E]">
          What people are saying
        </h2>

        <div className="mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[20px] flex flex-col justify-between w-full md:w-[400px] h-auto md:h-[272px] bg-[#FFF2EC] p-4 md:p-6 shadow-lg"
            >
              <div className="font-abezee text-6xl md:text-[123.85px] leading-[130%] h-auto md:h-[70px] text-[#ED4F01]">“</div>
              <p className="font-abezee text-base md:text-[18px] leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="font-bold mt-4 md:mb-3 font-Qilka text-gray-800 text-sm md:text-base">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}