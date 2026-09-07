"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "como-restaurant",
    title: "Bzahlel Design Group Offices",
    category: "Offices & Interior",
    imageUrl:"/handover.png",
    link: "/portfolio/como-restaurant",
  },
  {
    id: "spring-suites",
    title: "Utugi Group Of Schools",
    category: "Institutional & Architecture",
    imageUrl: "/Utugi Schools.jpg",
    link: "/portfolio/spring-suites",
  },
  {
    id: "luxe-residence",
    title: "Blume Nail Lab Salon",
    category: "Commercial & Interior",
    imageUrl: "/blumesalon.jpg",
    link: "/portfolio/luxe-residence",
  },
  {
    id: "villa-horizon",
    title: "Lower Kabete Apartment",
    category: "Furnishing & Procurement",
    imageUrl: "/service3.png",
    link: "/portfolio/villa-horizon",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-[#F8F5F1] py-20 px-6 sm:px-12 
    lg:px-24 relative">
      <div className="max-w-7xl mx-auto
      min-h-[1400px]
      ">
        {/* =====================================================
            HEADING
        ===================================================== */}
        <div className="flex flex-col items-left 
gap-4 justify-center
 px-6 mb-10 md:mb-12 opacity-80 translate-y-[80px] lg:translate-x-[-440px]">
  <h2
    className={`
      ${bodoni.className}
      text-[#3F3F3F]
      text-[2rem]
      md:text-[5rem]
      lg:text-[3rem]
      leading-[0.9]
      tracking-[-0.035em]
      font-normal
      text-center
    `}
  >
    Our Portfolio
  </h2>
  <div className="mt-7 w-[200px] h-[4px] bg-[#252525] lg:translate-x-[510px]" />
        </div>

        {/* 2-COLUMN GRID */}
        {/* 2-COLUMN GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-20 pt-16">
          {PORTFOLIO_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative block w-[500px] h-[500px]
               translate-y-[80px]
              translate-x-[0px]
              lg:translate-y-[150px]
              lg:translate-x-[60px] 
              overflow-hidden rounded-sm shadow-sm"
            >
              {/* IMAGE WITH ZOOM EFFECT */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center 
                transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* OVERLAY WITH TITLE */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center p-6 text-center">
                <h3 className={`text-2xl sm:text-3xl font-serif font-medium text-[#2D3748] tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#2D3748]/80 font-light transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}