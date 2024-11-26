import { logoSrcs } from "../../../resources";

export default function SuperPowerSection() {
  return (
    <div className="flex flex-col container max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">Our Superpowers</h3>

      <div className="flex items-center justify-between w-full gap-1 flex-wrap">
        {logoSrcs.map((src, index) => (
          <img
            key={index}
            src={src}
            width={80}
            height={80}
            className="partner-logo"
          />
        ))}
      </div>
    </div>
  );
}
