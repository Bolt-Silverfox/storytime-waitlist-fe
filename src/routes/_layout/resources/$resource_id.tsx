import { createFileRoute, Link } from "@tanstack/react-router";
import { resourcesData } from "../../../../data";
import Icon from "../../../components/shared/Icon";
import { useState } from "react";

export const Route = createFileRoute("/_layout/resources/$resource_id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { resource_id } = Route.useParams();
  const [showMore, setShowMore] = useState(false);
  const resource = resourcesData.find(
    (resource) => String(resource.id) === resource_id,
  );

  if (!resource)
    return (
      <div className="flex h-dvh w-dvw flex-1 flex-col items-center justify-center gap-y-3">
        <p className="font-Qilka text-xl">Resource not found</p>
        <Link
          className="bg-primary rounded-xl px-20 py-3 text-center text-white"
          to="/"
        >
          Go home
        </Link>
      </div>
    );
  const trimmedResource = showMore
    ? resource.description
    : resource.description.slice(0, 2);
  return (
    <div className="mx-auto mt-11 mb-14 max-w-7xl flex-1 px-5 md:mt-20 md:mb-28 md:px-10 xl:mt-24">
      <img
        src={"../../../../resources/dummy-image.png"}
        alt={`image illustration for ${resource.title}`}
        className="mb-8 h-[271px] w-full rounded-[20px] md:mb-14 md:h-[464px]"
      />
      <div className="flex flex-col gap-y-3">
        <p className="font-Qilka text-[32px] md:text-[48px]">
          {resource.title}
        </p>
        <ul className="hidden flex-col gap-y-7 md:flex">
          {resource.description.map((d, index) => (
            <li key={index}>
              <p className="font-abezee text-2xl leading-[150%] text-[#4F4C4B]">
                {d}
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-y-7 md:hidden">
          {trimmedResource.map((d, index) => (
            <li key={index}>
              <p className="font-abezee text-2xl leading-[150%] text-[#4F4C4B]">
                {d}
              </p>
            </li>
          ))}
          <button
            onClick={() => setShowMore((s) => !s)}
            className="text-primary font-abezee flex flex-row gap-x-4 place-self-center"
          >
            {showMore ? "Show less" : "Show More"}
            {showMore ? (
              <img
                src="../../../../public/icons/chevron-down.svg"
                alt="show less icon"
                className="rotate-180"
              />
            ) : (
              <img
                src="../../../../public/icons/chevron-down.svg"
                alt="show more icon"
              />
            )}
          </button>
        </ul>
      </div>
      <footer className="mx-auto mt-20 flex max-w-[845px] flex-col gap-y-4 rounded-4xl bg-[#FBF2EB] px-8 py-12">
        <h2 className="font-Qilka text-center text-[24px]">
          Interested in our Product?
        </h2>
        <div className="flex flex-col items-center">
          <p className="font-abezee mx-auto max-w-[473px] text-center text-base leading-5 text-[#212121]">
            Fill the form below and be the first to know when we launch. Get
            early access and exclusive updates
          </p>
        </div>
        <form action="" className="mt-4 flex flex-col gap-y-6">
          <div className="relative flex flex-col gap-y-2.5">
            <label
              htmlFor="fullName"
              className="font-abezee text-base text-[#221d1d]"
            >
              Full name
            </label>
            <input
              name="fullName"
              type="text"
              className="font-abezee h-[50px] rounded-full border border-[#4A413F] bg-white px-10"
              placeholder="Enter your full name"
            />
            <button className="absolute top-11.5 left-2">
              <Icon color="#4A413F" name="User" />
            </button>
          </div>
          <div className="relative flex flex-col gap-y-2.5">
            <label
              htmlFor="email"
              className="font-abezee text-base text-[#221d1d]"
            >
              Email address
            </label>
            <input
              type="text"
              name="email"
              className="font-abezee h-[50px] rounded-full border border-[#4A413F] bg-white px-10"
              placeholder="Enter your full name"
            />
            <button className="absolute top-11.5 left-2">
              <Icon color="#4A413F" name="Mail" />
            </button>
          </div>
          <button className="bg-primary hover:bg-primary/70 h-[50px] w-full rounded-full text-white transition-all duration-200 hover:cursor-pointer">
            Get to know us
          </button>
        </form>
      </footer>
    </div>
  );
}
