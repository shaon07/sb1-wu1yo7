import { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};
export default function Button({
  variant = "primary",
  className,
  children,
  type = "button",
}: ButtonProps) {
  const variantItems = `btn-${variant}`;

  return <button type={type} className={`${variantItems} ${className}`}>{children}</button>;
}
