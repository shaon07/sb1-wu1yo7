import PartnersLogo from "../../Molecules/PartnersLogo";

export default function Partners() {
  return (
    <section className="pb-16 bg-velbetRed backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">
          TRUSTED BY OUR PARTNERS
        </p>

        <PartnersLogo />
      </div>
    </section>
  );
}
