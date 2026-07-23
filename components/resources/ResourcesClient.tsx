"use client";

import React from "react";
import ResourceCard from "./ResourceCard";

interface Resource {
  id: number;
  title: string;
  imageSrc: string;
  description: string[];
}

interface ResourcesClientProps {
  resources: Resource[];
}

const ResourcesClient: React.FC<ResourcesClientProps> = ({ resources }) => {
  return (
    <div className="relative z-0 min-h-screen w-full">
      <div className="relative z-10 mx-auto max-w-[1300px] px-4 py-16 md:px-10">
        <div className="flex flex-col items-center">
          <h1 className="font-Qilka text-center text-4xl leading-10 text-[#231F1E] md:text-[56px]">
            Resources
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                title={resource.title}
                imageSrc={resource.imageSrc}
                excerpt={resource.description[0] ?? ""}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="font-abezee text-xl text-gray-500">
                No resources found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesClient;
