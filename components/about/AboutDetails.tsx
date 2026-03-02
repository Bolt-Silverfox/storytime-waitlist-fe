export default function AboutDetails() {
  return (
    <section className="flex flex-col items-center space-y-8 py-6 md:flex-row-reverse md:space-y-0">
      <p className="text-2xl leading-10 md:w-3/5 lg:w-1/2 lg:leading-12">
        Storytime for Kids provides a safe and fun space where children can
        explore courage, kindness, curiosity, and creativity through imaginative
        and memorable stories.
      </p>
      <img
        src="/aboutpage/kids-adventure.png"
        alt="Kids adventure"
        className="md:w-2/5 lg:max-h-100 lg:w-1/2"
      />
    </section>
  );
}
