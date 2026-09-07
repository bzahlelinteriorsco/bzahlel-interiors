"use client";

import { Bodoni_Moda } from "next/font/google";
import Image from "next/image";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
});

const process = [
  {
    number: "01",
    title: "Discovery & Site Visit",
    image: "/sitevisit.png",
    description:
      "We begin by understanding your vision, lifestyle, needs, and aspirations. A site visit allows us to assess the space, its architecture, and the opportunities that will shape the design.",
  },
  {
    number: "02",
    title: "Concept, Design & Documentation",
    image: "/process.png",
    description:
      "We develop the creative direction through concepts, mood boards, space planning, material selections, and detailed documentation that brings the vision together.",
  },
  {
    number: "03",
    title: "Procurement & Installation",
    image: "/procurement.png",
    description:
      "We carefully coordinate sourcing, purchasing, logistics, deliveries, installation, and styling, ensuring every element is executed with precision.",
  },
  {
    number: "04",
    title: "Final Handover",
    image: "/handover.png",
    description:
      "Once every detail has been refined and styled, we complete the final walkthrough and hand over a beautifully finished space ready to be lived in.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="
        bg-[#FDFCFB]
        min-h-[870px]

        pt-40
        md:pt-44
        lg:pt-48

        pb-28
        md:pb-32
        lg:pb-40

        scroll-mt-[88px]
        lg:scroll-mt-[122px]

        overflow-hidden
      "
    >
      {/* =====================================================
    HEADING & DIVIDER (LOCKED & CENTERED TOGETHER)
===================================================== */}
<div className="flex flex-col items-center 
gap-4 justify-center
 px-6 mb-10 md:mb-12 opacity-80 translate-y-[80px] lg:translate-y-[90px]">
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
    Our Process
  </h2>

  <div className="mt-7 w-[200px] h-[4px] bg-[#252525]" />
</div>

      {/* =====================================================
          FOUR STEP PROCESS
      ===================================================== */}

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-8
            xl:gap-x-13
            gap-y-14
            translate-y-[100px]
            translate-x-[0px]
            lg:translate-y-[160px]
            lg:translate-x-[50px]
          "
        >
          {process.map((item) => (
            <ProcessCard
              key={item.number}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          FINAL CALL TO ACTION
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          text-center
          mt-28
          md:mt-36
          pb-10
          translate-y-[220px]
        "
      >
        <h2
          className={`
            ${bodoni.className}
            text-[#4A3B32]
            text-[2.2rem]
            md:text-[3rem]
            leading-[1]
            font-normal
          `}
        >
          Ready to Begin?
        </h2>

        <p
          className="
            mt-5
            max-w-[520px]
            px-6
            text-[12px]
            md:text-[13px]
            leading-[1.8]
            text-[#6F625A]
            font-light
            translate-y-[20px]
          "
        >
          Let's create a space that reflects your vision,
          lifestyle, and individuality.
        </p>

        <a
          href="/start-project"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            min-w-[220px]
            h-[52px]
            border
            border-[#B8956A]
            text-[#5A493C]
            text-[10px]
            tracking-[0.14em]
            uppercase
            font-medium
            transition-all
            duration-500
            hover:bg-[#B8956A]
            hover:text-[#FDFCFB]
            translate-y-[40px]
          "
        >
          START YOUR PROJECT
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  item,
}: {
  item: {
    number: string;
    title: string;
    image: string;
    description: string;
  };
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      <div
        className="
          relative
          w-[150px]
          h-[190px]
          bg-[#F4E7DC]
          p-[7px]
          mb-8
        "
      >
        <div
          className="
            relative
            w-full
            h-full
            overflow-hidden
          "
        >
          <Image
            src={item.image}
            alt={`B.ZAHLEL Interiors ${item.title}`}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        </div>

        {/* =================================================
            STEP NUMBER
        ================================================= */}

        <div
          className="
            absolute
            -bottom-4
            left-1/2
            -translate-x-1/2
            w-9
            h-9
            rounded-full
            bg-[#F4E7DC]
            flex
            items-center
            justify-center
            text-[#3F3F3F]
            text-[10px]
            tracking-[0.12em]
            font-medium
          "
        >
          {item.number}
        </div>
      </div>

      {/* ===================================================
          TITLE
      =================================================== */}

      <h3
        className="
          uppercase
          tracking-[0.20em]
          text-[10px]
          font-semibold
          text-[#303030]
          leading-[2.7]
          max-w-[190px]
          min-h-[42px]
          flex
          items-center
          justify-center
          translate-y-[15px]
        "
      >
        {item.title}
      </h3>

      {/* ===================================================
          DESCRIPTION
      =================================================== */}

      <p
        className="
          mt-4
          text-[#555555]
          text-[12px]
          leading-[1.7]
          font-light
          max-w-[210px]
          translate-y-[15px]
        "
      >
        {item.description}
      </p>

      
    </div>
  );
}