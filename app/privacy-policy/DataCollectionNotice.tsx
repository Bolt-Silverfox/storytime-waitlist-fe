const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Who the waitlist is for",
    body: [
      "The Storytime waitlist is for parents and guardians. We do not knowingly collect personal information from children through the waitlist, and the waitlist is not directed at children.",
    ],
  },
  {
    heading: "What we collect from parents",
    body: [
      "When you join the waitlist or contact us we collect the details you enter: your name and email address, and any message you write on the contact form. We use them to tell you about the Storytime launch and to reply to you.",
    ],
  },
  {
    heading: "Analytics and advertising tools on this site",
    body: [
      "Amplitude, Meta Pixel and Contentsquare only run if you press Accept on the cookie banner. Until you choose, and if you press Reject, none of them load and nothing is sent to them. Sentry, described below, runs whatever you choose.",
      "If you accept, Amplitude is used for product analytics. It counts sessions, page views, button clicks, whether the waitlist form was viewed, and completed or failed sign-ups, identified only by a random identifier generated in your browser. By default Amplitude also collects your IP address. Amplitude receives the path of each page you visit (for example /about), but not the rest of the address, such as anything after a \"?\". We do not send your name or email address to it. People who signed up before this change may have had their email address sent to Amplitude under our earlier setup; we no longer send it.",
      "If you accept, Meta Pixel is used for advertising measurement. It records visits to pages of this site, which Meta may associate with your browser and any Meta account you are signed in to. We do not send your name or email address to Meta Pixel from our code.",
      "If you accept, Contentsquare is used to understand how the site is used. It records session replays and heatmaps of how visitors move through and interact with pages, and can record JavaScript errors on the page. Session replays can capture what you type unless field masking is switched on.",
      "If you accept, the addresses of pages you visit are sent to Meta Pixel and Contentsquare. Sentry always receives them, for error reports and performance measurements. The contact form no longer puts details you type into the page address.",
      "Sentry is used to detect errors and measure site performance. It runs whatever you choose on the cookie banner and receives page addresses and error details.",
      "If you accept, Amplitude, Meta Pixel and Contentsquare may set cookies or similar identifiers in your browser. We remember your choice in a cookie called st_consent for 6 months. To change it, use Cookie settings in the footer. Pressing Reject, or changing your mind later, stops these tools collecting anything further and clears the cookies and browser storage they set on this site. It does not delete information they already received. To ask for that, contact us using the details below.",
    ],
  },
  {
    heading: "Retention and deletion",
    body: [
      "We keep your waitlist details only for as long as we need them to tell you about Storytime, or until you ask us to delete them. You can ask us to access, correct or delete your information, or to stop contacting you, at any time using the contact details below.",
    ],
  },
  {
    heading: "Children's privacy and your rights",
    body: [
      "We do not knowingly collect personal information from children. The site is not directed at children, but if the visitor accepts, the analytics tools above record their visit, and Sentry records errors and performance for every visitor. If we later offer features that collect information about children, we will explain it clearly and ask for a parent's or guardian's consent first. If you believe a child has given us personal information, contact us and we will delete it.",
      "You can ask us for access to your information, or for it to be corrected or deleted, using the contact details below. You may also complain to your data protection authority, such as the Nigeria Data Protection Commission or your supervisory authority in the EU or UK.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Write to team@storytimeapp.me or support@storytimeapp.me for any privacy question or request.",
    ],
  },
];

export default function DataCollectionNotice() {
  return (
    <section className="flex flex-col gap-y-6">
      {sections.map((section) => (
        <div key={section.heading} className="flex flex-col gap-y-2">
          <h2 className="font-Qilka text-base font-bold">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p
              key={paragraph}
              className="font-abezee text-sm leading-6 text-[#212121]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
