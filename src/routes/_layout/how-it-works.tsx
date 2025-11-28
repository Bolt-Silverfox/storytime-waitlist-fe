import { createFileRoute } from "@tanstack/react-router";
import { howItWorksData } from "../../../data";

export const Route = createFileRoute("/_layout/how-it-works")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-11 mb-14 flex-1 md:mt-20 md:mb-28 xl:mt-24">
      <ul className="mx-5 flex max-w-7xl flex-col gap-y-14 md:gap-y-20 md:px-10 xl:mx-auto">
        {howItWorksData.map((item) => (
          <li className="">
            <h2 className="font-Qilka text-center text-[32px] lg:text-[56px]">
              How it works for {item.name}
            </h2>
            <h4 className="font-abezee mx-auto mt-4 mb-9 max-w-[635px] text-center text-xl leading-[150%] text-[#4F4C4B] md:mb-15">
              {item.description}
            </h4>
            <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {item.images.map((image, index) => (
                <li className="flex flex-col items-center rounded-[40px] bg-[#FFF2EC] p-[49px] xl:p-16">
                  <img
                    src={image.src}
                    alt={image.title + " image"}
                    className="h-[366px] min-w-[296px]"
                  />
                  <p className="bg-primary font-Qilka mt-7 mb-4 flex size-14 flex-row items-center justify-center self-center rounded-full text-center text-2xl text-white">
                    {index + 1}
                  </p>
                  <h3 className="font-Qilka text-center text-2xl leading-[130%] md:text-3xl">
                    {image.title}
                  </h3>
                  <p className="font-abezee text-center text-xl text-[#3a3a3a]">
                    {image.description}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
