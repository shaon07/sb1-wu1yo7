import { Globe2 } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Globe2 className="text-red-500 h-8 w-8" />
      <span className="text-xl font-bold text-black dark:text-white">RedTilt</span>
    </div>
  );
}
