import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-500 ${
        variant === "primary"
          ? "bg-[#F8F5F1] text-black hover:bg-[#d8d5d1]"
          : "border border-white/20 text-white hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}