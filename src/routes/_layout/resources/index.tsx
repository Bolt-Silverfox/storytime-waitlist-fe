import { createFileRoute, useNavigate } from "@tanstack/react-router";
import PageTitle from "../../../components/PageTitle";
import { resourcesData } from "../../../../data";
import { useState } from "react";

export const Route = createFileRoute("/_layout/resources/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const visibleResources = showMore ? resourcesData : resourcesData.slice(0, 3);
  return (
    <div className="mt-11 mb-14 flex-1 md:mt-20 md:mb-28 xl:mt-24">
      <PageTitle title="Resources" />
      <ul className="mx-5 mt-10 hidden max-w-7xl grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:mt-15 md:px-10 lg:grid-cols-3 xl:mx-auto">
        {resourcesData.map((resource) => (
          <li
            onClick={() =>
              navigate({
                to: "/resources/$resource_id",
                params: { resource_id: String(resource.id) },
              })
            }
            key={resource.id}
            className="flex cursor-pointer flex-col gap-y-4 transition-all duration-200 hover:scale-105"
          >
            <img
              src={resource.imageSrc}
              alt={`image illustration for ${resource.title}`}
              className="h-[227px] w-[381px] rounded-[20px] md:w-[400px]"
            />
            <div className="flex flex-col gap-y-3">
              <p className="font-Qilka text-2xl">{resource.title}</p>
              <p className="font-abezee text-base leading-[130%] text-[#3A3A3A]">
                {resource.description[0].split("").slice(0, 76)}...
              </p>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mx-5 mt-10 grid grid-cols-1 gap-5 sm:hidden">
        {visibleResources.map((resource) => (
          <li
            onClick={() =>
              navigate({
                to: "/resources/$resource_id",
                params: { resource_id: String(resource.id) },
              })
            }
            key={resource.id}
            className="flex cursor-pointer flex-col gap-y-4 transition-all duration-200 hover:scale-105"
          >
            <img
              src={resource.imageSrc}
              alt={`image illustration for ${resource.title}`}
              className="h-[227px] w-full rounded-[20px] max-md:self-center md:w-[400px]"
            />
            <div className="flex flex-col gap-y-3">
              <p className="font-Qilka text-2xl">{resource.title}</p>
              <p className="font-abezee text-base leading-[130%] text-[#3A3A3A]">
                {resource.description[0].split("").slice(0, 76)}...
              </p>
            </div>
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
  );
}
