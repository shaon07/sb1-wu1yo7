import { ReactNode } from "react";
import { Check } from "lucide-react";

type FeatureCardProps = {
  features: string[];
  title: string;
  icon: ReactNode;
  index: number;
};

export default function FeatureCard({
  features,
  title,
  icon,
  index,
}: FeatureCardProps) {
  return (
    <div className="w-full">
      <div className="h-full bg-gradient-to-br from-red-950 to-red-900 text-white overflow-hidden relative rounded-lg shadow-lg">
        <div
          className="absolute top-[-20px] left-[-10px] text-red-900/30 text-[150px] font-bold leading-none"
          aria-hidden="true"
        >
          0{index}
        </div>

        <div className="p-6 pb-3 relative z-10">
          <h2 className="flex items-center gap-2 text-xl font-medium mt-[3rem]">
            {icon}
            <span>{title}</span>
          </h2>
        </div>

        <div className="h-full relative z-10 pr-0 pt-1 pb-4">
          <div
            className="border-l-2 border-t-2 border-red-500/50 rounded-tl-xl pt-4 pl-4 pb-4 w-[80%] ml-auto h-full
                      bg-gradient-to-br from-red-900 to-red-950
                      shadow-[inset_2px_2px_4px_rgba(220,38,38,0.3),_4px_4px_8px_rgba(220,38,38,0.5)]
                      transform perspective-1000 rotate-y-1 rotate-x-1"
          >
            <ul className="space-y-2">
              {features.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="shrink-0 bg-white rounded-full">
                    <Check size={15} color="black" aria-hidden="true" />
                  </span>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
