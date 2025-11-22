export default function Categories() {
  const categories = [
    { name: "Adventure",  image: "/categ-1.png" },
    { name: "Mystery", image: "/categ-2.png" },
    { name: "Fantasy", image: "/categ-3.png" },
    { name: "Sci-fi", image: "/categ-4.png" },
  ];

  return (
    <section className="md:max-w-[1239px] mx-auto h-auto md:h-[482px] mt-20 md:mt-40 px-4">
      <div className="container mx-auto">
        <h2 className="font-Qilka mb-8 md:mb-15 text-center text-3xl md:text-[56px] font-bold text-[#231F1E]">
          Browse through our categories
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex cursor-pointer font-abezee flex-col items-center justify-center shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="w-full md:w-[287px] h-40 md:h-[394px] rounded-[20px] flex px-4 md:px-[30px] items-end py-5"
                style={{
                  backgroundImage: `url('${category.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-white text-xl md:text-[32px] font-bold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}