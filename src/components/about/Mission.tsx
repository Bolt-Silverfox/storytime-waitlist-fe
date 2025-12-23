export default function Mission() {
  return (
    <section className="mt-20 grid h-full grid-cols-1 gap-6 md:mt-40 md:grid-cols-2">
      {[
        {
          title: "Our Mission",
          text: "To be the leading storytelling space where children grow into confident, kind, and creative individuals through the power of story.",
        },
        {
          title: "Our Vision",
          text: "To make storytelling engaging, educational, and easily accessible to children everywhere.",
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
