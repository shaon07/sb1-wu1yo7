import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import HoverIcon from "../../Atoms/HoverIcon";

export default function CopyRightCard() {
  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © Copyright 2024. All Rights Reserved By RedTilt
        </p>
        
        <div className="flex space-x-4">
          <HoverIcon>
            <Twitter className="h-5 w-5" />
          </HoverIcon>

          <HoverIcon>
            <Facebook className="h-5 w-5" />
          </HoverIcon>

          <HoverIcon>
            <Instagram className="h-5 w-5" />
          </HoverIcon>

          <HoverIcon>
            <Github className="h-5 w-5" />
          </HoverIcon>
        </div>
      </div>
    </div>
  );
}
