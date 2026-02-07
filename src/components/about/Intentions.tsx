type IntentionsProps = {
  openDownloadModal: () => void;
};

export default function Intentions({ openDownloadModal }: IntentionsProps) {
  return (
    <section className="mt-20 grid h-full grid-cols-1 items-center gap-6 md:my-14 md:mt-40 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="font-Qilka text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          Our Intention building Storytime
        </h1>
        <p className="text-[#4F4C4B] lg:leading-8">
          Storytime was created by parents, educators, and storytellers who
          believe stories should calm, inspire, and nurture curiosity. In a
          noisy digital world, we set out to create a calm, trusted space where
          beautifully told stories encourage listening, imagination, and gentle
          moments of connection, anytime and anywhere.
        </p>
        <button
          onClick={openDownloadModal}
          className="bg-primary font-abezee cursor-pointer rounded-full px-10 py-3 text-center text-white transition-colors hover:bg-[#d13706]"
        >
          Download now
        </button>
      </div>
      <img
        src="/aboutpage/kid-on-clouds.png"
        alt="Kid on clouds illustration"
      />
    </section>
  );
}
