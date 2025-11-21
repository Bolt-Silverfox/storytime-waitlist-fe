import { createFileRoute } from "@tanstack/react-router";
import WhatWeOffer from "../../components/WhatWeOffer";
import Categories from "../../components/Categories";
import Details from "../../components/Details";
import ParentalControls from "../../components/ParentalControl";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";
import Questions from "../../components/Questions";
import CTASection from "../../components/CTASection";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="">

   
    <section className="">
      <div className="mx-auto flex max-w-[954px] flex-col gap-6">
        <h1 className="font-Qilka text-center text-[56px]">
          Storytime4kids - where magical stories grow smarter kids
        </h1>
        <p className="font-abezee text-center text-2xl">
          Magical stories for kids, from bedtime snuggles to learning
          adventures.
        </p>
        <div className="flex justify-center gap-3">
          <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[13.48px] text-center text-white">
            <span></span>
            <div>
              <p className="text-[12px]">Download on</p>
              <p>Google play</p>
            </div>
          </button>
          <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[13.48px] text-center text-white">
            <span></span>
            <div>
              <p className="text-[12px]">Download on</p>
              <p>Apple store</p>
            </div>
          </button>
        </div>
      </div>

      <div className="relative -top-50 flex h-screen flex-col border-black bg-[url('/landingpage/cloud.png')] bg-cover bg-center">
        <div className="flex justify-between">
          <img
            src="/landingpage/fairy.png"
            alt="fairy"
            className="h-[298px] max-w-[383px] scale-x-[-1]"
          />
          <img
            src="/landingpage/bird.png"
            alt="fairy"
            className="relative -top-30 h-[298px] max-w-[383px]"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute top-16 right-72 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute -top-30 right-48 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute top-30 left-72 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute -top-1 left-48 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute -top-40 left-28 h-6 w-6"
          />
          <div className="absolute inset-x-0 bottom-20 justify-center">
            <p className="font-Qilka mx-auto mb-5 max-w-[650px] text-center text-5xl text-[#FFEDE2]">
              Experience storytelling like never before
            </p>
            <div className="relative -left-20 flex gap-3">
              {lists.map((list, i) => (
                <span className="rounded-full bg-white/70 px-16 py-3.5" key={i}>
                  {list}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* multiple components to be rendered from here */}
    <div className="md:w-[1280px] mx-auto  ">
        <WhatWeOffer />
        <Categories />
        <Details />
        <ParentalControls />
        <Features />
        <Testimonial />
        <Questions />
        <CTASection />
    </div>

    </main>
  );
}

const lists = [
  "Adventure",
  "Mystery",
  "Comedy",
  "Fantasy",
  "SciFi",
  "Action",
  "Adventure",
  "Mystery",
  "Comedy",
];
