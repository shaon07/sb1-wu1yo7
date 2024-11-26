import SupportLinks from "../../Molecules/SupportLinks";
import CopyRightCard from "../../Molecules/CopyRightCard";

export default function Footer() {
  return (
    <footer className="bg-darker py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        <SupportLinks />
        <CopyRightCard />
      </div>
    </footer>
  );
}
