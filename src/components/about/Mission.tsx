export default function Mission() {
  return (
    <section className="mt-20 grid h-full grid-cols-1 gap-6 md:mt-40 md:grid-cols-2">
      {[
        {
          title: "Our Mission",
          text: "To help children grow into confident, kind, creative individuals through the power of story.",
        },
        {
          title: "Our Vision",
          text: "To become the most trusted storytelling platform for children worldwide.",
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
