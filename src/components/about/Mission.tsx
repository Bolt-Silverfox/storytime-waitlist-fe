export default function Mission() {
  return (
    <section className="mt-20 grid h-full grid-cols-1 gap-6 md:mt-40 md:grid-cols-2">
      {[
        {
          title: "Our Mission",
          text: "To help children grow into confident, kind, and creative individuals by connecting them with thoughtful, age-appropriate stories that inspire imagination and emotional growth.",
        },
        {
          title: "Our Vision",
          text: "To become the most trusted storytelling platform for children, where meaningful stories are easy to access and enjoyable to experience.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-light-pink h-full rounded-3xl px-6 py-10 shadow"
        >
          <h2 className="font-Qilka mb-4 text-2xl font-bold md:text-3xl">
            {item.title}
          </h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}
