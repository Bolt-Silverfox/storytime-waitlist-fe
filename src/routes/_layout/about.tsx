import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-abezee -mb-16 flex-1 space-y-8 text-xl">
      <section className="mb-4 grid grid-cols-1 items-center gap-x-4 p-6 md:mb-8 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-Qilka text-3xl font-bold">
            Bringing Stories to Life for Every Child
          </h1>
          <p>
            We create meaningful digital story experiences that nurture
            curiosity, spark creativity, and support children’s growth.
          </p>
          <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[13.48px] text-center text-white">
            Start listening
          </button>
        </div>
        <div className="w-full">
          <img
            src="/aboutpage/kid-on-clouds.png"
            alt="Kid on clouds illustration"
          />
        </div>
      </section>
      <section className="space-y-8 px-6 md:space-y-12">
        <p className="text-center text-2xl md:text-3xl">
          Storytime for Kids provides a safe and fun space where children can
          explore courage, kindness, curiosity, and creativity through
          imaginative and memorable stories.
        </p>
        <img
          src="/aboutpage/kids-adventure.png"
          alt="Kids adventure"
          className="aspect-video rounded-2xl max-h-100 w-full"
        />
      </section>
      <section className="grid h-full grid-cols-1 gap-6 px-6 md:my-14 md:grid-cols-2">
        {[
          {
            title: "Our Vision",
            text: "To be the go-to storytelling space where children grow into confident, kind, and creative individuals through the power of stories.",
          },
          {
            title: "Our Mission",
            text: "Make storytelling fun, educational, and easily accessible to children everywhere.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-light-pink rounded-3xl p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid h-full grid-cols-1 items-center gap-6 px-6 md:my-14 md:grid-cols-2 lg:my-16">
        <div className="space-y-8">
          <h1 className="font-Qilka text-3xl font-bold">
            Our intention building StoryTime
          </h1>
          <p className="text-[#4F4C4B]">
            Storytime was created by parents, educators, and storytellers who
            saw the need for safe, meaningful, and screen-free entertainment. In
            a world full of noise, we imagined a space where children could
            enjoy calming, inspiring stories anytime, anywhere.
          </p>
          <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[13.48px] text-center text-white">
            Download now
          </button>
        </div>
        <img
          src="/aboutpage/kid-on-clouds.png"
          alt="Kid on clouds illustration"
        />
      </section>
      <section className="bg-primary grid h-full grid-cols-1 gap-6 space-y-6 p-6 pb-0 text-white md:my-14 md:grid-cols-2 md:pt-12 lg:my-16 md:-mb-12 lg:-mb-1">
        <div className="space-y-6 md:my-24">
          <h1 className="font-Qilka text-3xl font-bold md:text-4xl">
            Keep the magic going!
          </h1>
          <p>
            Magical stories for kids, from bedtime snuggles to learning
            adventures.
          </p>
        </div>
        <div>
          <img
            src="/aboutpage/app-screenshot.png"
            alt="App screenshot"
            className="mx-auto max-h-100 object-contain md:h-auto md:w-4/5"
          />
        </div>
      </section>
    </div>
    // </div>
  );
}
