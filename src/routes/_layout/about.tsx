import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-abezee -mb-16 flex-1 space-y-8 text-xl">
      <div className="hidden bg-[url(/aboutpage/hero-image.png)] bg-cover bg-position-[75%] md:block md:min-h-180">
        <section className="mb-4 grid min-h-100 w-full grid-cols-1 items-center gap-x-4 md:mb-8 md:grid-cols-2">
          <div className="space-y-6 p-6 text-center md:text-left">
            <h1 className="font-Qilka text-3xl leading-16 font-bold md:text-4xl lg:text-5xl">
              Bringing Stories to Life for Every Child
            </h1>
            <p>
              We create meaningful digital story experiences that nurture
              curiosity, spark creativity, and support children’s growth.
            </p>
            <button 
            onClick={() =>
    window.open(
      "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
      "_blank"
    )
  }
            className="bg-primary font-abezee mx-auto flex items-center gap-4 rounded-full px-8 py-4 text-center text-white md:mx-0">
              <img src="/aboutpage/play-store-icon.png" alt="Play store icon" />
              <div className="flex-col items-start text-left">
                <p className="text-xs">Download on</p>
                <p>Google play</p>
              </div>
            </button>
            <div className="min-h-100 w-full bg-[url(/aboutpage/hero-image.png)] bg-cover bg-position-[75%] md:hidden"></div>
          </div>
        </section>
      </div>

      <section className="flex flex-col items-center space-y-8 px-6 py-10 md:flex-row-reverse md:space-y-12">
        <p className="text-2xl leading-12 md:w-1/2 md:text-3xl">
          Storytime for Kids provides a safe and fun space where children can
          explore courage, kindness, curiosity, and creativity through
          imaginative and memorable stories.
        </p>
        <img
          src="/aboutpage/adventure-for-kids.png"
          alt="Kids adventure"
          className="aspect-video max-h-100 w-1/2 rounded-2xl"
        />
      </section>
      <section className="flex h-full flex-col-reverse gap-6 px-6 md:my-14 md:flex-row">
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
          <div
            key={index}
            className="bg-light-pink rounded-3xl p-6 shadow md:w-1/2"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              {item.title}
            </h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid h-full grid-cols-1 items-center gap-6 px-6 md:my-14 md:grid-cols-2 lg:my-16">
        <div className="space-y-8">
          <h1 className="font-Qilka text-3xl leading-16 font-bold md:text-4xl lg:text-5xl">
            Our intention building StoryTime
          </h1>
          <p className="text-[#4F4C4B]">
            Storytime was created by parents, educators, and storytellers who
            saw the need for safe, meaningful, and screen-free entertainment. In
            a world full of noise, we imagined a space where children could
            enjoy calming, inspiring stories anytime, anywhere.
          </p>
          <button
          onClick={() =>
    window.open(
      "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
      "_blank"
    )
  }
           className="bg-primary font-abezee rounded-full px-10 py-3 text-center text-white">
            Download now
          </button>
        </div>
        <img
          src="/aboutpage/kid-on-clouds.png"
          alt="Kid on clouds illustration"
        />
      </section>
      <section className="bg-primary grid h-full grid-cols-1 gap-6 space-y-6 p-6 pb-0 text-white md:my-14 md:-mb-12 md:grid-cols-2 md:items-start md:pt-12 lg:my-16 lg:-mb-1">
        <div className="space-y-6 md:mt-30">
          <h1 className="font-Qilka text-3xl font-bold md:text-4xl lg:text-5xl">
            Keep the magic going!
          </h1>
          <p>
            Magical stories for kids, from bedtime snuggles to learning
            adventures.
          </p>
          <button
          onClick={() =>
    window.open(
      "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
      "_blank"
    )
  }
           className="font-abezee text-primary flex items-center gap-4 rounded-full bg-white px-8 py-3 text-center">
            <img src="/aboutpage/play-store-orange.png" alt="Play store icon" />
            <div className="flex-col items-start text-left">
              <p className="text-xs">Download on</p>
              <p>Google play</p>
            </div>
          </button>
        </div>
        <div className="relative mx-auto w-full md:w-4/5 md:pb-10 lg:pb-0">
          {/* Screenshot */}
          <img
            src="/aboutpage/app-screenshot.png"
            alt="App screenshot"
            className="mx-auto w-full object-contain"
          />

          {/* Stars around screenshot (hidden on mobile) */}
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 -left-4 hidden w-6 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-4 right-2 hidden w-5 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-16 -left-12 hidden w-7 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute -right-4 bottom-16 hidden w-6 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 -left-8 hidden w-5 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/3 -left-10 hidden w-5 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/5 -left-16 hidden w-8 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/3 -right-4 hidden w-6 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-1/3 -left-12 hidden w-9 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute -top-4 left-1/2 hidden w-5 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute right-1/3 bottom-8 hidden w-6 md:block"
          />
          <img
            src="/aboutpage/star.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 right-1 hidden w-4 md:block"
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
  );
}
