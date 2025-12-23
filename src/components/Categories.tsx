import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    { name: "Adventure", image: "/categ-1.png" },
    { name: "Mystery", image: "/categ-2.png" },
    { name: "Fantasy", image: "/categ-3.png" },
    { name: "Sci-fi", image: "/categ-4.png" },
  ];

  return (
    <section className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-Qilka mb-8 text-center text-[32px] font-bold text-[#231F1E] md:mb-15 md:text-[56px]"
      >
        Browse through our categories
      </motion.h2>

      {/* carousel for mobile and tablet */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 lg:hidden">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="font-abezee flex min-w-[287px] cursor-pointer snap-center flex-col items-center justify-center overflow-hidden rounded-[20px] shadow-xl"
          >
            <div
              className="flex h-[357px] w-[287px] items-end rounded-[20px] px-4 py-5"
              style={{
                backgroundImage: `url('${category.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* grids */}
      <div className="mx-auto hidden max-w-7xl grid-cols-4 gap-6 lg:grid">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "backOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="font-abezee flex cursor-pointer flex-col items-center justify-center rounded-[20px] shadow-xl"
          >
            <div
              className="flex items-end rounded-[20px] px-[30px] py-5 md:h-[394px] md:w-[287px]"
              style={{
                backgroundImage: `url('${category.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-[32px] font-bold text-white">
                {category.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
