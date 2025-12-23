import { createFileRoute, useNavigate } from "@tanstack/react-router";
import PageTitle from "../../../components/PageTitle";
import { useState, useEffect } from "react";
import {
  getPosts,
  urlFor,
  hasImageAsset,
  type SanityPost,
} from "../../../lib/sanity";

export const Route = createFileRoute("/_layout/resources/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const visiblePosts = showMore ? posts : posts.slice(0, 3);

  if (loading) {
    return (
      <div className="mt-11 mb-14 flex-1 md:mt-20 md:mb-28 xl:mt-24">
        <PageTitle title="Resources" />
        {/* Desktop skeleton */}
        <ul className="mx-5 mt-10 hidden max-w-7xl grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:mt-15 md:px-10 lg:grid-cols-3 xl:mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i} className="flex animate-pulse flex-col gap-y-4">
              <div className="h-[227px] w-[381px] rounded-[20px] bg-gray-200 md:w-[400px]" />
              <div className="flex flex-col gap-y-3">
                <div className="h-7 w-3/4 rounded bg-gray-200" />
                <div className="flex flex-col gap-y-1">
                  <div className="h-4 w-full rounded bg-gray-100" />
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Mobile skeleton */}
        <ul className="mx-5 mt-10 grid grid-cols-1 gap-5 sm:hidden">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex animate-pulse flex-col gap-y-4">
              <div className="h-[227px] w-full rounded-[20px] bg-gray-200" />
              <div className="flex flex-col gap-y-3">
                <div className="h-7 w-3/4 rounded bg-gray-200" />
                <div className="flex flex-col gap-y-1">
                  <div className="h-4 w-full rounded bg-gray-100" />
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mt-11 mb-14 flex-1 md:mt-20 md:mb-28 xl:mt-24">
      <PageTitle title="Resources" />
      <ul className="mx-5 mt-10 hidden max-w-7xl grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:mt-15 md:px-10 lg:grid-cols-3 xl:mx-auto">
        {posts.map((post) => (
          <li
            onClick={() =>
              navigate({
                to: "/resources/$resource_id",
                params: { resource_id: post.slug.current },
              })
            }
            key={post._id}
            className="flex cursor-pointer flex-col gap-y-4 transition-all duration-200 hover:scale-105"
          >
            <img
              src={
                hasImageAsset(post.previewImage)
                  ? urlFor(post.previewImage).width(400).height(227).url()
                  : "./resources/dummy-image.png"
              }
              alt={`image illustration for ${post.title}`}
              className="h-[227px] w-[381px] rounded-[20px] object-cover md:w-[400px]"
            />
            <div className="flex flex-col gap-y-3">
              <p className="font-Qilka text-2xl">{post.title}</p>
              <p className="font-abezee text-base leading-[130%] text-[#3A3A3A]">
                {post.excerpt ? post.excerpt.slice(0, 76) : ""}...
              </p>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mx-5 mt-10 grid grid-cols-1 gap-5 sm:hidden">
        {visiblePosts.map((post) => (
          <li
            onClick={() =>
              navigate({
                to: "/resources/$resource_id",
                params: { resource_id: post.slug.current },
              })
            }
            key={post._id}
            className="flex cursor-pointer flex-col gap-y-4 transition-all duration-200 hover:scale-105"
          >
            <img
              src={
                hasImageAsset(post.previewImage)
                  ? urlFor(post.previewImage).width(400).height(227).url()
                  : "./resources/dummy-image.png"
              }
              alt={`image illustration for ${post.title}`}
              className="h-[227px] w-full rounded-[20px] object-cover max-md:self-center md:w-[400px]"
            />
            <div className="flex flex-col gap-y-3">
              <p className="font-Qilka text-2xl">{post.title}</p>
              <p className="font-abezee text-base leading-[130%] text-[#3A3A3A]">
                {post.excerpt ? post.excerpt.slice(0, 76) : ""}...
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
              src="/icons/chevron-down.svg"
              alt="show less icon"
              className="rotate-180"
            />
          ) : (
            <img src="/icons/chevron-down.svg" alt="show more icon" />
          )}
        </button>
      </ul>
    </div>
  );
}
