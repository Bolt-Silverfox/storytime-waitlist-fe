import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/FaqComponent";
import { useState, useEffect } from "react";
import {
  getFaqCategories,
  getFaqs,
  type SanityFaqCategory,
  type SanityFaq,
} from "../../lib/sanity";

export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

function FaqSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-14 w-full rounded-lg bg-gray-200" />
    </div>
  );
}

function CategorySkeleton() {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-10 w-32 animate-pulse rounded-full bg-gray-200"
        />
      ))}
    </div>
  );
}

function RouteComponent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<SanityFaqCategory[]>([]);
  const [faqs, setFaqs] = useState<SanityFaq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedCategories, fetchedFaqs] = await Promise.all([
          getFaqCategories(),
          getFaqs(),
        ]);
        setCategories(fetchedCategories);
        setFaqs(fetchedFaqs);
        if (fetchedCategories.length > 0) {
          setCategory(fetchedCategories[0]._id);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch = f.question
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category ? f.category?._id === category : true;
    return matchesSearch && matchesCategory;
  });

  const selectedCategoryTitle = categories.find(
    (c) => c._id === category,
  )?.title;

  return (
    <div className="relative z-0 w-full">
      {/* LEFT IMAGE — detective at bottom */}
      <img
        src="detective.png"
        alt="detective"
        className="absolute bottom-0 left-0 z-0 hidden h-[350px] w-[350px] object-contain md:block"
      />

      <img
        src="doggie.png"
        alt="doggie"
        className="absolute top-[300px] right-0 z-0 hidden h-[250px] w-[250px] object-cover md:block"
      />
      <div className="relative z-10 mt-8 flex flex-1 flex-col items-center px-4 py-10">
        <h1 className="font-Qilka text-center text-4xl leading-10 text-[#231F1E] md:text-[56px]">
          Frequently asked questions
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="font-abezee mt-6 h-[47px] w-full max-w-[620px] rounded-[100px] border px-4 py-3 text-[16px] leading-normal md:mt-[29px] md:h-[61px] md:px-11 md:py-4 md:text-[21px]"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Categories */}
        {loading ? (
          <div className="mt-12 w-full max-w-[620px] md:max-w-full lg:flex lg:justify-center">
            <CategorySkeleton />
          </div>
        ) : (
          <div className="-mx-4 mt-12 w-[calc(100%+2rem)] overflow-x-auto">
            <ul className="font-abezee flex w-max items-center gap-3 px-4 text-[14px] leading-normal text-[#3F1102] md:w-full md:justify-center md:gap-4 md:px-2 md:text-[15px]">
              {categories.map((c) => (
                <li
                  key={c._id}
                  onClick={() => setCategory(c._id)}
                  className={`h-auto shrink-0 cursor-pointer rounded-full px-4 py-2 md:px-[21px] ${category === c._id ? "bg-[#EC4007] text-white" : "border border-[#4F4C4B] text-[#4F4C4B]"} `}
                >
                  <span className="whitespace-nowrap">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQs */}
        <div className="mt-[61px] flex w-full max-w-[620px] flex-col gap-5 md:gap-8">
          {loading ? (
            <>
              {[1, 2, 3, 4, 5].map((i) => (
                <FaqSkeleton key={i} />
              ))}
            </>
          ) : filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FaqComponent
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <p className="font-abezee text-center text-gray-500">
              {search
                ? "No FAQs found matching your search."
                : `No FAQs found in ${selectedCategoryTitle || "this category"}.`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
