export default function Intentions() {
  return (
    <section className="mt-20 grid h-full grid-cols-1 items-center gap-6 md:my-14 md:mt-40 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="font-Qilka text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          Our Intention building story time
        </h1>
        <p className="text-[#4F4C4B] lg:leading-8">
          Storytime was created by parents, educators, and storytellers who saw
          the need for safe, meaningful, and screen-free entertainment. In a
          world full of noise, we imagined a space where children could enjoy
          calming, inspiring stories anytime, anywhere.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
              "_blank",
            )
          }
          className="bg-primary font-abezee rounded-full px-10 py-3 text-center text-white"
        >
          Download now
        </button>
      </div>
      <img
        src="/aboutpage/kid-on-clouds.png"
        alt="Kid on clouds illustration"
      />
    </section>
  );
}
