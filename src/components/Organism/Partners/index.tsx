import PartnersLogo from "../../Molecules/PartnersLogo";

export default function Partners() {
  return (
    <section className="pb-16 bg-white dark:bg-velbetRed backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="text-center dark:text-gray-500 text-black font-medium mb-8">
          TRUSTED BY OUR PARTNERS
        </p>

        <PartnersLogo />
      </div>
    </section>
  );
}
