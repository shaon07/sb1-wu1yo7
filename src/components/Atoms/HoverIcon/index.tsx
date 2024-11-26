import { ReactNode } from "react";

type HoverIconProps = {
  children: ReactNode;
};

export default function HoverIcon({ children }: HoverIconProps) {
  return (
    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
      {children}
    </a>
  );
}
