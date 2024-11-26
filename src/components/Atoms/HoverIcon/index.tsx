import { ReactNode } from "react";

type HoverIconProps = {
  children: ReactNode;
};

export default function HoverIcon({ children }: HoverIconProps) {
  return (
    <a href="#" className="text-white bg-dark dark:bg-lightRed p-2 rounded-full hover:text-red-500 transition-colors">
      {children}
    </a>
  );
}
