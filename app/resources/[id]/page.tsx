import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { resourcesData } from "../../../data";
import ResourceSignUp from "../../../components/resources/ResourceSignUp";

interface ResourcePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { id } = await params;
  const resource = resourcesData.find((r) => r.id === parseInt(id));

  if (!resource) {
    return {
      title: "Resource Not Found | Storytime",
    };
  }

  return {
    title: `${resource.title} | Resources | Storytime`,
    description: resource.description[0].substring(0, 160),
  };
}

export default async function ResourceDetailPage({
  params,
}: ResourcePageProps) {
  const { id } = await params;
  const resource = resourcesData.find((r) => r.id === parseInt(id));

  if (!resource) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1200px] py-16 ">
      <Link
        href="/resources"
        className="font-abezee text-primary mb-8 flex items-center gap-2 transition-all hover:gap-3"
      >
        <ChevronLeft size={20} />
        Back to Resources
      </Link>

      <article>
        <h1 className="font-Qilka mb-8 text-3xl leading-tight text-[#231F1E] md:text-5xl">
          {resource.title}
        </h1>

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={
              resource.imageSrc.startsWith("./")
                ? resource.imageSrc.substring(1)
                : resource.imageSrc
            }
            alt={resource.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          {resource.description.map((paragraph, index) => {
            const isListItem = /^\d+\.\s/.test(paragraph);

            if (isListItem) {
              return (
                <div key={index} className="flex gap-4">
                  <span className="font-Qilka text-primary flex-shrink-0 text-xl font-bold">
                    {paragraph.split(".")[0]}.
                  </span>
                  <p className="font-abezee text-lg leading-relaxed text-[#4F4C4B]">
                    {paragraph.split(".").slice(1).join(".").trim()}
                  </p>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="font-abezee text-lg leading-relaxed text-[#4F4C4B]"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <ResourceSignUp />
    </div>
  );
}
