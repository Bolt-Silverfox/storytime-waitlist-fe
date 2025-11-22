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

   
   <section className="-mb-60 mx-auto">
      <div className="mx-auto flex max-w-[954px] flex-col gap-6 overflow-x-hidden px-4 xl:px-0">
        <h1 className="font-Qilka text-center text-[40px] md:text-[48px] xl:text-[56px] leading-tight">
          Storytime4kids - where magical stories grow smarter kids
        </h1>
        <p className="font-abezee text-center text-[#231F1ECC] text-[20px] md:text-[22px] xl:text-[24px] max-w-[616px] mx-auto">
          Magical stories for kids, from bedtime snuggles to learning
          adventures.
        </p>

        
        <button className="bg-primary justify-center items-center mx-auto flex gap-3 font-abezee rounded-full w-[211px] h-[69px] text-center text-white">
          <img src="play-store.png" className="w-[29px] h-[32px]" alt="" />

          <div className="pl-1">
            <p className="text-[12px] text-center">Download on</p>
            <p className="text-center">Google play</p>
          </div>
        </button>
      </div>

      <div className="relative -top-50 flex h-[600px] md:h-[700px] xl:h-[773px] flex-col border-black bg-[url('/landingpage/cloud.png')] bg-cover bg-center">
        <div className="flex justify-between">
          <img
            src="/landingpage/fairy.png"
            alt="fairy"
            className="hidden md:block h-[200px] md:h-[250px] xl:h-[298px] max-w-[250px] md:max-w-[320px] xl:max-w-[383px] scale-x-[-1]"
          />
          <img
            src="/landingpage/bird.png"
            alt="fairy"
            className="hidden md:block relative -top-30 h-[200px] md:h-[250px] xl:h-[298px] max-w-[250px] md:max-w-[320px] xl:max-w-[383px]"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute top-16 right-[20%] md:right-[25%] xl:right-72 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute -top-30 right-[15%] md:right-[20%] xl:right-48 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute top-30 left-[20%] md:left-[25%] xl:left-72 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="absolute -top-1 left-[15%] md:left-[20%] xl:left-48 h-6 w-6"
          />
          <img
            src="/landingpage/star.png"
            alt="fairy"
            className="hidden md:block absolute -top-40 left-[10%] md:left-[15%] xl:left-28 h-6 w-6"
          />


          {/* video-thingy */}
          <section className="cursor-pointer hidden md:flex flex-col md:flex-row items-center justify-between absolute top-40 md:top-50 xl:top-65 left-[5%] md:left-[15%] xl:left-96 rounded-[40px] bg-white p-[16px] md:p-[20px] xl:p-[24px] mb-10 w-[90%] md:w-[70%] xl:w-[499px] h-auto xl:h-[211px]">
            <div className="container bg-[url(/video-thing.png)] bg-cover bg-center w-[140px] md:w-[150px] xl:w-[163px] h-[140px] md:h-[150px] xl:h-[163px] border border-red-300 rounded-[27px] mb-4 md:mb-0">
            </div>
            <div className="container w-full md:w-[60%] xl:w-[264px] flex flex-col h-auto xl:h-[163px] rounded-[27px]">
              <div className="h-auto xl:h-[112px] w-full">
                <p className="font-Qilka text-[18px] md:text-[19px] xl:text-[20px] text-[#231F1E]">
                  Experience and listen to over 200+ unique stories across different genres
                </p>
              </div>
              <div className="h-auto xl:h-[32px] text-[#4F4C4B] font-abezee text-[14px] md:text-[15px] xl:text-[16px] mt-2">
                <p>Be a part of the StoryTime community</p>
              </div>
            </div>
          </section>



          <div className="absolute mt-10 inset-x-0 bottom-10 md:bottom-15 xl:bottom-20 justify-center px-4">
            <p className="font-Qilka mx-auto mb-8 md:mb-12 xl:mb-15 max-w-[476px] h-auto xl:h-[74px] text-center text-[24px] md:text-[28px] xl:text-[32px] text-[#FFEDE2]">
              Experience storytelling like never before in
            </p>
            <div className="relative xl:-left-20 flex flex-wrap md:flex-nowrap gap-2 md:gap-3 justify-center">
              {lists.map((list, i) => (
                <span className="rounded-full bg-white/70 px-8 md:px-12 xl:px-16 py-2.5 md:py-3 xl:py-3.5 text-sm md:text-base" key={i}>
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
