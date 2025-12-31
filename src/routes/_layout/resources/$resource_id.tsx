import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Icon from "../../../components/shared/Icon";
import { useState, useEffect, type FormEvent } from "react";
import useSqueezeInfo from "../../../contexts/SqueezeContext";
import {
  getPostBySlug,
  urlFor,
  hasImageAsset,
  type SanityPost,
} from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import CTASection from "../../../components/CTASection";

export const Route = createFileRoute("/_layout/resources/$resource_id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { resource_id } = Route.useParams();
  const [showMore, setShowMore] = useState(false);
  const { setUserInfo } = useSqueezeInfo();
  const navigate = useNavigate();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(resource_id)
      .then((data) => setPost(data))
      .finally(() => setLoading(false));
  }, [resource_id]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      email: string;
      fullName: string;
    };
    setUserInfo(data);
    e.currentTarget.reset();
    navigate({ to: "/squeeze" });
  };

  if (loading) {
    return (
      <div className="mx-auto mt-11 mb-14 max-w-7xl flex-1 animate-pulse px-5 md:mt-20 md:mb-28 md:px-10 xl:mt-24">
        {/* Image skeleton */}
        <div className="mb-8 h-[271px] w-full rounded-[20px] bg-gray-200 md:mb-14 md:h-[464px]" />
        <div className="flex flex-col gap-y-6">
          {/* Title skeleton */}
          <div className="h-10 w-3/4 rounded bg-gray-200 md:h-14" />
          {/* Body content skeleton */}
          <div className="flex flex-col gap-y-4">
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-11/12 rounded bg-gray-100" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-4/5 rounded bg-gray-100" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-3/4 rounded bg-gray-100" />
          </div>
        </div>
        {/* Footer CTA skeleton */}
        <div className="mx-auto mt-20 flex max-w-[845px] flex-col gap-y-4 rounded-4xl bg-[#FBF2EB] px-8 py-12">
          <div className="mx-auto h-7 w-1/2 rounded bg-gray-200" />
          <div className="mx-auto h-4 w-3/4 rounded bg-gray-100" />
          <div className="mt-4 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2.5">
              <div className="h-4 w-20 rounded bg-gray-200" />
              <div className="h-[50px] w-full rounded-full bg-gray-100" />
            </div>
            <div className="flex flex-col gap-y-2.5">
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-[50px] w-full rounded-full bg-gray-100" />
            </div>
            <div className="h-[50px] w-full rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (!post)
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

  return (
    <>
      <div className="mx-auto mt-11 mb-14 max-w-7xl flex-1 px-5 md:mt-20 md:mb-28 md:max-w-4xl md:px-10 xl:mt-24">
        <img
          src={
            hasImageAsset(post.mainImage)
              ? urlFor(post.mainImage).width(1200).height(464).url()
              : "../../../../resources/dummy-image.png"
          }
          alt={`image illustration for ${post.title}`}
          className="mb-8 h-[271px] w-full rounded-[20px] object-cover md:mb-14 md:h-[464px]"
        />
        <div className="flex flex-col gap-y-3">
          <p className="font-Qilka text-[32px] md:text-[48px]">{post.title}</p>
          <div
            className={`font-abezee prose prose-lg max-w-none text-[#4F4C4B] ${!showMore ? "md:block" : ""}`}
          >
            <div className="hidden md:block">
              <PortableText value={post.body} />
            </div>
            <div className={`md:hidden ${!showMore ? "line-clamp-6" : ""}`}>
              <PortableText value={post.body} />
            </div>
            <button
              onClick={() => setShowMore((s) => !s)}
              className="text-primary font-abezee mt-4 flex flex-row gap-x-4 place-self-center md:hidden"
            >
              {showMore ? "Show less" : "Show More"}
              {showMore ? (
                <img
                  src="/icons/chevron-down.svg"
                  alt="show less icon"
                  className="rotate-180"
                />
              ) : (
                <img src="/icons/chevron-down.svg" alt="show more icon" />
              )}
            </button>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
