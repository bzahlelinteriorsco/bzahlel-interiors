import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-[1600px] px-6 md:px-12 xl:px-20 ${className}`}
    >
      {children}
    </div>
  );
}