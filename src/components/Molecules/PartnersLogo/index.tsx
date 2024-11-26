import { partnerLogos } from "../../../resources";

export default function PartnersLogo() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-8">
      {partnerLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="partner-logo"
        />
      ))}
    </div>
  );
}
