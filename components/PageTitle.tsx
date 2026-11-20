import type { Ref } from "react";

const PageTitle = ({
  title,
  headingRef,
}: {
  title: string;
  headingRef?: Ref<HTMLHeadingElement>;
}) => {
  return (
    <h1
      ref={headingRef}
      tabIndex={headingRef ? -1 : undefined}
      className="font-Qilka mt-16 text-center text-3xl text-[#231F1E] outline-none md:text-[56px]"
    >
      {title}
    </h1>
  );
};

export default PageTitle;
