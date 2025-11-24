import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import WhatWeOffer from "../../components/WhatWeOffer";
import Categories from "../../components/Categories";
import Details from "../../components/Details";
import ParentalControls from "../../components/ParentalControl";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";
import Questions from "../../components/Questions";
import CTASection from "../../components/CTASection";
import thumbSrc from "../../assets/video-thumbnail.png";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [playing, setPlaying] = useState(false);

  const videoSrc =
    "https://res.cloudinary.com/dwatri50n/video/upload/v1763801270/New_Project_23_Copy_2_C9EFB8A_eqtzzo.mp4";

  return (
    <main className="">
      <section className="relative md:-mt-10 -mt-20 -z-10 mx-auto -mb-70 ">
        <div className="mx-auto  flex h-auto   md:max-w-[954px]  flex-col gap-[20px] overflow-x-hidden px-[20px] xl:px-0">

          <h1 className="font-Qilka text-center  text-[30px] w-full  leading-[50px] md:text-[48px] xl:text-[56px]">
            Storytime4kids - where magical stories grow smarter kids
          </h1>
          <p className="font-abezee mx-auto max-w-[616px]   text-center text-[20px] text-[#231F1ECC] md:text-[22px] xl:text-[24px]">
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
            className="bg-primary mt-3 font-abezee relative  mx-auto -mt-4 flex  h-[69px] w-[211px] items-center justify-center gap-3 rounded-full text-center text-white md:mt-0 md:flex"
          >
            <img src="play-store.png" className="h-[32px] w-[29px]" alt="" />
            <div className="pl-1">
              <p className="text-center text-[12px]">Download on</p>
              <p className="text-center">Google play</p>
            </div>
          </button>
        </div>

        <div className="relative -top-50 flex h-[845px] flex-col bg-[url('/landingpage/cloud.png')] bg-cover bg-center md:h-[700px] xl:h-[773px]">
          <div className="flex justify-between">
            <img
              src="/landingpage/fairy.png"
              alt="fairy"
              className="hidden h-[200px] max-w-[250px] scale-x-[-1] md:block md:h-[250px] md:max-w-[320px] xl:h-[298px] xl:max-w-[383px]"
            />
            <img
              src="/landingpage/bird.png"
              alt="bird"
              className="relative -top-30 hidden h-[200px] max-w-[250px] md:block md:h-[250px] md:max-w-[320px] xl:h-[298px] xl:max-w-[383px]"
            />
          </div>

          {/* Stars */}
          <div className="overflow-hidden">
            <img
              src="/landingpage/star.png"
              className="absolute top-16 right-[20%] h-6 w-6 md:right-[25%] xl:right-72"
            />
            <img
              src="/landingpage/star.png"
              className="absolute -top-30 right-[15%] h-6 w-6 md:right-[20%] xl:right-48"
            />
            <img
              src="/landingpage/star.png"
              className="absolute top-30 left-[20%] h-6 w-6 md:left-[25%] xl:left-72"
            />
            <img
              src="/landingpage/star.png"
              className="absolute -top-1 left-[15%] h-6 w-6 md:left-[20%] xl:left-48"
            />
            <img
              src="/landingpage/star.png"
              className="absolute -top-40 left-[10%] hidden h-6 w-6 md:left-[15%] md:block xl:left-28"
            />
          </div>

          <section className="absolute top-80 md:top-32 left-1/2 z-10 flex h-auto w-[90%] -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-4 rounded-[40px] bg-white p-4 md:top-50 md:w-[70%] md:flex-row md:p-6 xl:top-65 xl:w-[500px] xl:p-8">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="relative h-[140px] w-[100%] overflow-hidden rounded-[27px] md:h-[150px] md:w-[150px] xl:h-[163px] xl:w-[163px]   "
              >
                <img
                  src={thumbSrc}
                  alt="story video thumbnail"
                  className="h-full w-[95%] mx-auto "
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FF6A1A] shadow-lg">
                    <svg
                      xmlns="https://res.cloudinary.com/dwatri50n/video/upload/v1763801270/New_Project_23_Copy_2_C9EFB8A_eqtzzo.mp4"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <video
                className="h-[140px] w-[140px] rounded-[27px] object-cover md:h-[150px] md:w-[150px] xl:h-[163px] xl:w-[163px]"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}

            <div className="flex h-auto w-full flex-col justify-center rounded-[27px] pl-0 md:w-[60%] md:pl-6 xl:w-[264px] xl:pl-8">
              <p className="font-Qilka mb-2 text-[18px] leading-snug text-[#231F1E] md:mb-4 md:text-[19px] xl:text-[20px]">
                Experience and listen to over 200+ unique stories across
                different genres
              </p>
              <p className="font-abezee text-[14px] text-[#4F4C4B] md:text-[15px] xl:text-[16px]">
                Be a part of the StoryTime community
              </p>
            </div>
          </section>

          <div className="absolute inset-x-0 bottom-10 z-0 justify-center px-4 md:bottom-15 xl:bottom-20">
            <p className="font-Qilka mx-auto mb-8 h-auto max-w-[476px] text-center text-[24px] text-[#FFEDE2] md:mb-12 md:text-[28px] xl:mb-15 xl:h-[74px] xl:text-[32px]">
              Experience storytelling like never before in
            </p>
            <div className="relative flex  justify-center gap-2 md:flex-nowrap md:gap-3 xl:-left-20">
              {lists.map((list, i) => (
                <span
                  className="rounded-full bg-white/70 px-8 py-2.5 text-sm md:px-12 md:py-3 md:text-base xl:px-16 xl:py-3.5"
                  key={i}
                >
                  {list}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      <div className="mx-auto ">
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
