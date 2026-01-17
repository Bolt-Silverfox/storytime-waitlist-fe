import { createFileRoute } from "@tanstack/react-router";
import { howItWorksData } from "../../../data";

export const Route = createFileRoute("/_layout/how-it-works")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-8 mb-14 flex-1 md:mt-10 md:mb-28 xl:mt-24">
      <div className="mx-5 flex max-w-7xl flex-col gap-y-8 md:gap-y-10 xl:mx-auto">
        <h2 className="font-Qilka text-center text-[32px] text-[#231F1E] lg:text-[56px]">
          How it works
        </h2>
        <h4 className="font-abezee mx-auto mb-9 max-w-[635px] text-center text-xl leading-[150%] text-[#4F4C4B] md:mb-15">
          From reading stories to learning new words, Storytime makes it easy for your child to enjoy safe, delightful stories designed to spark imagination and help them grow.
        </h4>
        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {howItWorksData.map((item, index) => (
            <li className="flex flex-col items-center rounded-[40px] bg-[#FFF2EC] p-[49px] xl:p-16">
              <img
                src={item.src}
                alt={item.title + " image"}
                className="object-contain h-full w-full"
              />
              <p className="bg-primary font-Qilka -mt-6 mb-4 flex size-14 flex-row items-center justify-center self-center rounded-full text-center text-2xl text-white">
                {index + 1}
              </p>
              <div className="space-y-2">
                <h3 className="font-Qilka text-center text-xl leading-[130%] md:text-3xl">
                  {item.title}
                </h3>
                <p className="font-abezee text-center text-[#3a3a3a]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
