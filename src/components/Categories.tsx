export default function Categories() {
  const categories = [
    { name: "Adventure", image: "/categ-1.png" },
    { name: "Mystery", image: "/categ-2.png" },
    { name: "Fantasy", image: "/categ-3.png" },
    { name: "Sci-fi", image: "/categ-4.png" },
  ];

  return (
    <section className="mx-auto h-auto md:h-[482px] mt-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-Qilka mb-8 md:mb-15 text-center text-[32px] md:text-[56px] font-bold text-[#231F1E]">
          Browse through our categories
        </h2>

        {/* carousel for mobile and tablet */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 scroll-smooth pb-4 no-scrollbar">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[287px] snap-center flex flex-col items-center justify-center cursor-pointer font-abezee shadow-xl rounded-[20px] overflow-hidden md:hover:scale-105 md:transition-all"
            >
              <div
                className="w-[287px] h-[357px] rounded-[20px] flex items-end px-4 py-5"
                style={{
                  backgroundImage: `url('${category.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* grids */}
        <div className="hidden lg:grid mx-auto max-w-7xl grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex cursor-pointer font-abezee flex-col items-center justify-center shadow-xl transition-all hover:scale-105 hover:shadow-2xl rounded-[20px]"
            >
              <div
                className="md:w-[287px] md:h-[394px] rounded-[20px] flex px-[30px] items-end py-5"
                style={{
                  backgroundImage: `url('${category.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-white text-[32px] font-bold">
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
