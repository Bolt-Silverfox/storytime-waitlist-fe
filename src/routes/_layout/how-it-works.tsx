import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/how-it-works")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-abezee flex flex-1 flex-col gap-[105px] px-6 lg:px-[100px]">
      <div className="mx-auto flex flex-col gap-11">
        <div className="">
          <h1 className="font-Qilka mx-auto max-w-[1032px] text-center text-3xl text-[#231F1E] sm:text-4xl md:text-[56px]">
            How it works for children
          </h1>
          <p className="mx-auto mt-5 max-w-[635px] text-center text-sm text-[#3A3A3A] sm:text-base md:text-xl">
            From learning new words to calming bedtime moments, Storytime makes
            it easy for your child to enjoy safe, delightful stories designed to
            spark imagination and help them grow.
          </p>
        </div>
        <div className="mx-auto flex gap-[31px] max-lg:flex-wrap">
          {howItWorks.child.map((child, i) => (
            <div className="relative mx-auto max-h-[665px] max-w-[400px] overflow-hidden rounded-[40px]">
              <div
                key={i}
                className="rounded-[40px] bg-[#EC4007] px-5 py-9 md:px-[47px] md:pt-[72px]"
              >
                <div className="overflow-hidden rounded-[40px] border-8">
                  <img
                    src={child.image}
                    alt="image"
                    className={`w-[270px] ${child.id == "2" && "relative"} ${child.id == "3" && "relative"}`}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 flex h-[40%] w-full flex-col justify-center gap-4 rounded-b-[40px] bg-[#FBF2EB] px-8 py-6 text-center">
                <div className="w-full">
                  <p className="font-Qilka mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EC4007] text-center text-2xl text-white sm:h-14 sm:w-14 lg:h-[58px] lg:w-[58px]">
                    {child.id}
                  </p>
                  <p className="font-Qilka text-2xl text-[#231F1E] md:text-[32px]">
                    {child.title}
                  </p>
                  <p className="text-[#3A3A3A]">{child.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-11">
        <div className="">
          <h1 className="font-Qilka mx-auto max-w-[1032px] text-center text-3xl text-[#231F1E] sm:text-4xl md:text-[56px]">
            How it works for parents
          </h1>
          <p className="mx-auto mt-5 max-w-[635px] text-center text-sm text-[#3A3A3A] sm:text-base md:text-xl">
            From learning new words to calming bedtime moments, Storytime makes
            it easy for your child to enjoy safe, delightful stories designed to
            spark imagination and help them grow.
          </p>
        </div>
        <div className="mx-auto flex-wrap flex items-stretch gap-[31px] max-md:flex-wrap">
          {howItWorks.parent.map((child, i) => (
            <div className="relative mx-auto max-h-[665px] max-w-[400px] overflow-hidden rounded-[40px]">
              <div
                key={i}
                className="rounded-[40px] bg-[#EC4007] px-5 py-9 md:px-[47px] md:pt-[72px]"
              >
                <div className="overflow-hidden rounded-[40px] border-8">
                  <img src={child.image} alt="image" className={`w-[270px]`} />
                </div>
              </div>
              <div className="absolute bottom-0 flex h-[40%] w-full flex-col justify-center rounded-b-[40px] bg-[#FBF2EB] px-8 py-6 text-center">
                <div className="gap-4">
                  <p className="font-Qilka mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EC4007] text-center text-2xl text-white sm:h-14 sm:w-14 lg:h-[58px] lg:w-[58px]">
                    {child.id}
                  </p>
                  <p className="font-Qilka text-2xl text-[#231F1E] md:text-[32px]">
                    {child.title}
                  </p>
                  <p className="text-[#3A3A3A]">{child.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const howItWorks = {
  child: [
    {
      id: "1",
      title: "Choose a Story.",
      description: "Browse bedtime tales, fairy tales, and fun adventures.",
      image: "/landingpage/hiw1.png",
    },
    {
      id: "2",
      title: "Pick How to Read.",
      description:
        "Read yourself, let the app narrate, or explore interactively.",
      image: "/landingpage/hiw2.png",
    },
    {
      id: "3",
      title: "Enjoy the Magic.",
      description: "Kids learn, imagine, and have fun.",
      image: "/landingpage/hiw3.png",
    },
  ],
  parent: [
    {
      id: "1",
      title: "Sign-up login",
      description: "Access the app",
      image: "/landingpage/hiwp.png",
    },
    {
      id: "2",
      title: "Manage experience",
      description: "Recommend stories, track progress, set control",
      image: "/landingpage/hiwp2.png",
    },
    {
      id: "3",
      title: "Monitor progress",
      description: "Monitor their daily challenges check reports",
      image: "/landingpage/hiwp3.png",
    },
  ],
};
