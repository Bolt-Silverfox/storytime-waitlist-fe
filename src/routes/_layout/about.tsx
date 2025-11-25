import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-abezee -mb-16 flex-1 space-y-8 text-lg lg:text-xl">
      <div className="relative min-h-screen w-full">
        <section className="container mx-auto mb-4 grid w-full grid-cols-1 items-center gap-x-4 md:mb-8 md:grid-cols-2">
          <div className="space-y-6 px-8 lg:px-12 text-center md:text-left relative z-20">
            <h1 className="font-Qilka text-3xl leading-10 md:leading-12 lg:leading-16 font-bold md:text-4xl lg:text-5xl lg:mt-6 xl:mt-8">
              Bringing Stories to Life for Every Child
            </h1>
            <p className="text-[#4F4C4B] lg:leading-9">
              We create meaningful digital story experiences that nurture
              curiosity, spark creativity, and support children&apos;s growth.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="bg-primary font-abezee mx-auto flex items-center gap-4 rounded-full px-6 py-3 text-center text-white md:mx-0"
            >
              <img src="/aboutpage/play-store-icon.png" alt="Play store icon" />
              <div className="flex-col items-start text-left">
                <p className="text-xs">Download on</p>
                <span className="leading-none">Google play</span>
              </div>
            </button>
          </div>
        </section>
        <img
          src="/aboutpage/hero-image.png"
          alt="Storytime hero"
          className="inset-0 -top-16 z-10 h-full min-h-[90vh] w-full origin-right overflow-visible object-cover object-[85%_0%] md:absolute md:scale-100 md:object-cover md:object-center"
        />
      </div>

      <section className="container mx-auto flex flex-col items-center space-y-8 md:space-y-0 py-6 md:flex-row-reverse">
        <p className="px-8 lg:px-12 text-2xl leading-10 md:w-3/5 lg:w-1/2 lg:leading-12">
          Storytime for Kids provides a safe and fun space where children can
          explore courage, kindness, curiosity, and creativity through
          imaginative and memorable stories.
        </p>
        <img
          src="/aboutpage/kids-adventure.png"
          alt="Kids adventure"
          className="md:w-2/5 lg:max-h-100 lg:w-1/2"
        />
      </section>
      <section className="container mx-auto grid h-full grid-cols-1 gap-6 px-8 lg:px-12 md:my-14 md:grid-cols-2">
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

      <section className="container mx-auto mt-12 grid h-full grid-cols-1 items-center gap-6 md:my-14 md:grid-cols-2 md:gap-0 lg:my-16">
        <div className="space-y-6 px-8 lg:px-12">
          <h1 className="font-Qilka text-3xl leading-12 lg:leading-16 md:text-4xl lg:text-5xl font-bold">
            Our Intention building story time
          </h1>
          <p className="text-[#4F4C4B] lg:leading-8">
            Storytime was created by parents, educators, and storytellers who
            saw the need for safe, meaningful, and screen-free entertainment. In
            a world full of noise, we imagined a space where children could
            enjoy calming, inspiring stories anytime, anywhere.
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
      <div className="bg-[#ED4F01]">
        <section className="container mx-auto grid h-full grid-cols-1 gap-6 space-y-6 px-8 lg:px-12 py-12 pb-0 text-white md:my-14 md:-mb-9 md:grid-cols-2 md:items-start md:pt-12 lg:my-16 lg:mb-0">
          <div className="space-y-6 md:mt-20">
            <h1 className="font-Qilka text-3xl font-bold md:text-4xl lg:text-5xl">
              Keep the magic going!
            </h1>
            <p className="lg:leading-8">
              Magical stories for kids, from bedtime snuggles to learning
              adventures.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="font-abezee text-primary flex items-center gap-4 rounded-full bg-white px-8 lg:px-12 py-3 text-center"
            >
              <img
                src="/aboutpage/play-store-orange.png"
                alt="Play store icon"
              />
              <div className="flex-col items-start text-left">
                <p className="text-xs">Download on</p>
                <p>Google play</p>
              </div>
            </button>
          </div>
          <div className="relative mx-auto w-full md:w-4/5 md:pb-10 lg:pb-0">
            {/* Screenshot */}
            <div className="relative h-160 overflow-y-hidden rounded-t-4xl shadow-[8.23px_-0.82px_13.66px_0_rgba(0,0,0,0.4)] md:h-120 lg:h-140">
              <img
                src="/aboutpage/app-screenshot.jpg"
                alt="App screenshot"
                className="mx-auto w-full rounded-4xl border-6 border-black object-cover"
              />
            </div>

            {/* Stars around screenshot (hidden on mobile) */}
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-10 left-8 hidden w-4 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute top-4 -right-20 hidden w-8 md:block"
            />

            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-8 bottom-16 hidden w-6 md:block"
            />

            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute top-1/2 -left-16 hidden w-5 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute top-1/10 -left-10 hidden w-5 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute top-1/3 -right-12 hidden w-6 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-8 -left-20 hidden w-9 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-6 left-2/3 hidden w-3 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-1/3 bottom-8 hidden w-3 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute top-1/2 -right-20 hidden w-4 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-1/4 left-1/3 hidden w-5 md:block"
            />
            <img
              src="/aboutpage/star.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-8 bottom-1/3 hidden w-5 md:block"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
