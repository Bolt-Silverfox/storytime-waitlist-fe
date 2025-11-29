import type { FormEvent } from "react";
import useSqueezeInfo from "../contexts/SqueezeContext";

const SqueezeHero = () => {
  const { setUserInfo, userInfo } = useSqueezeInfo();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      email: string;
      fullName: string;
    };
    setUserInfo(data);
    e.currentTarget.reset();
  };
  return (
    <section className="" aria-labelledby="Hero section">
      <main className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col self-center">
          <h1 className="font-Qilka mb-8 text-4xl leading-[100%] max-md:text-center md:text-[48px]">
            Are you looking for a better kid of screen time for your child?
          </h1>
          <p className="font-abezee text-text-light text-xl leading-9 max-md:text-center md:text-2xl">
            Storytime4kids is a mobile app that brings stories to life with
            interactive features, animations and fun activities sparking
            imagination and creativity in kids while making reading a delightful
            experience
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2.5">
              <input
                name="fullName"
                defaultValue={userInfo.fullName}
                type="text"
                className="font-abezee h-[50px] w-full rounded-full border border-[#4A413F] bg-white px-10 md:max-w-[397px]"
                placeholder="Enter your full name"
              />
            </div>
            <div className="relative flex flex-col gap-y-2.5">
              <input
                defaultValue={userInfo.email}
                type="text"
                name="email"
                className="font-abezee h-[50px] w-full rounded-full border border-[#4A413F] bg-white px-10 md:max-w-[397px]"
                placeholder="Enter your full name"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/70 h-[50px] w-full rounded-full text-white transition-all duration-200 hover:cursor-pointer md:max-w-[397px]"
            >
              Give me access now
            </button>
          </form>
        </div>
        <div className="h-[445px] w-full rounded-xl bg-[url('/squeeze/squeeze-hero-image.png')] bg-cover bg-center md:h-[900px]"></div>
      </main>
      <div className="mt-10 h-[300px] w-full rounded-xl lg:h-[508px]">
        <iframe
          className="h-full w-full"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/Thic07ev7ug?si=bUQ4gvCG6HkCLkWE"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default SqueezeHero;
