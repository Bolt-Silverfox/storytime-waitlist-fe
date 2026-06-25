import type { SanityPrivacyPolicy } from "../../lib/sanity";
import PageTitle from "../../components/PageTitle";

type Props = {
  privacyPolicy: SanityPrivacyPolicy[];
};

/**
 * Presentational server component. The list is fetched inside the
 * `app/privacy-policy/page.tsx` async server component, which keeps
 * the policy body in the initial HTML for crawlers and no-JS clients.
 */
export default function PrivacyPolicyClient({ privacyPolicy }: Props) {
  if (privacyPolicy.length === 0) {
    return (
      <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 pb-12 md:gap-y-14 md:px-10">
        <PageTitle title="Privacy policy" />
        <p className="font-abezee text-sm leading-6 text-[#212121]">
          Our privacy policy is not available right now. Please check back in a
          moment or contact us if you need immediate assistance.
       </p>
     </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10">
      <PageTitle title="Privacy policy" />
      <ul className="flex flex-1 flex-col gap-y-6">
        {privacyPolicy.map((policy) => (
          <li key={policy._id} className="flex flex-col gap-y-2">
            <h2 className="font-Qilka text-base font-bold">
              {policy.index}. {policy.heading}
           </h2>
            {policy.contentType === "list" && policy.listItems ? (
              <ul className="space-y-2">
                {policy.listItems.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-abezee shrink-0 text-sm leading-6 text-[#212121]">
                      {idx + 1}.
                   </span>
                    <p className="font-abezee text-sm leading-6 text-[#212121]">
                      {point}
                   </p>
                 </li>
                ))}
             </ul>
            ) : (
              <p className="font-abezee text-sm leading-6 text-[#212121]">
                {policy.paragraph}
             </p>
            )}
         </li>
        ))}
     </ul>
   </div>
  );
}
