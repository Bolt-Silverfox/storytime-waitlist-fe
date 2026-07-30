import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceCardProps {
  id: number;
  title: string;
  imageSrc: string;
  excerpt: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  imageSrc,
  excerpt,
}) => {
  return (
    <Link
      href={`/resources/${id}`}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-transparent hover:border hover:border-gray-100 bg-white hover:shadow-sm"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc.startsWith("./") ? imageSrc.substring(1) : imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-Qilka mb-3 line-clamp-2 text-xl font-semibold text-[#231F1E]">
          {title}
        </h3>
        <p className="font-abezee line-clamp-2 text-sm text-[#4F4C4B]">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default ResourceCard;
