import ServiceCards from "../../Molecules/ServiceCards";

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-black dark:text-white">What we offer</h2>
        <div className="mb-12">
          <p className="w-fit text-white dark:text-gray-400 dark:bg-darker bg-lightRed mx-auto border border-red-500 rounded-[50px] text-base text-center p-[5px_8px] md:p-[10px_20px]">
            Our Experts Will Help You In Following Fields
          </p>
        </div>

        <ServiceCards />
      </div>
    </section>
  );
}
