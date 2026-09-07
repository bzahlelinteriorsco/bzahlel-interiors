import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h1
      className="
      font-[family:var(--font-heading)]
      text-5xl
      md:text-7xl
      xl:text-8xl
      leading-[0.95]
      tracking-tight
      text-[#F8F5F1]
      "
    >
      {children}
    </h1>
  );
}
