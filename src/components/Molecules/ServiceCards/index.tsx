import { services } from "../../../resources";
import FeatureCard from "../FeatureCard";

export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <FeatureCard
          title={service.title}
          features={service.features}
          index={index + 1}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
