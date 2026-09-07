"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Oranienbaum } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     SCROLL TO SECTION
     ALSO WORKS FROM OTHER PAGES
  ===================================================== */

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    /*
      If we are not on the Home page,
      go to Home and target the section.
    */
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#F5F1EB]
      "
    >
      {/* =====================================================
          HERO BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.045, 1.08, 1.045, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src="/theheroo.png"
            alt="B.ZAHLEL Interiors luxury interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* SOFT OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-black/10
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          z-20

          left-1/2
          top-[57%]

          -translate-x-1/2
          -translate-y-1/2

          w-[92%]
          max-w-[650px]

          text-center

          lg:left-[58%]
          lg:top-[57%]

          lg:w-[600px]
        "
      >
        {/* =================================================
            BRAND NAME
        ================================================= */}

        <div
          className="
            translate-x-[0px]
            translate-y-[-70px]

            lg:-translate-x-25
            lg:-translate-y-10
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            <h1
              className={`
                ${oranienbaum.className}

                text-[#3A3530]

                text-[4rem]
                sm:text-[3.8rem]
                md:text-[4.4rem]
                lg:text-[5.5rem]

                font-normal
                leading-[0.95]

                tracking-[0.08em]
              `}
            >
              B.ZAHLEL
            </h1>

            <p
              className="
                mt-4
                text-[#3A3530]

                text-[10px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[20px]

                uppercase
                tracking-[0.55em]
                font-light
              "
            >
              DESIGN GROUP
            </p>
          </motion.div>
        </div>

        {/* =================================================
            HERO BUTTONS
        ================================================= */}

        <div
          className="
            translate-x-[-10px]

            sm:translate-x-0
            sm:translate-y-0

            lg:-translate-x-25
            lg:translate-y-10
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.8,
            }}
            className="
              mt-9

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-7
              lg:gap-15
            "
          >
            {/* OUR SERVICES */}

            <button
              onClick={() => scrollToSection("services")}
              className="
                w-[200px]
                sm:w-[200px]
                lg:w-[250px]

                h-[50px]

                border
                border-[#F5F1EB]/60

                bg-[#B8AD9D]/55

                text-[#F5F1EB]

                text-[10px]

                uppercase

                tracking-[0.28em]

                transition-all
                duration-500

                hover:bg-[#8E6F4C]
                hover:text-[#F5F1EB]
                hover:border-[#A3825B]
              "
            >
              Our Services
            </button>

            {/* PORTFOLIO */}

            <button
              onClick={() => scrollToSection("portfolio")}
              className="
                w-[200px]
                sm:w-[200px]
                lg:w-[250px]

                h-[50px]

                border
                border-[#F5F1EB]/60

                bg-[#B8AD9D]/55

                text-[#F5F1EB]

                text-[10px]

                uppercase

                tracking-[0.28em]

                transition-all
                duration-500

                hover:bg-[#8E6F4C]
                hover:text-[#F5F1EB]
                hover:border-[#A3825B]
              "
            >
              Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FIXED RESPONSIVE NAVIGATION
      ===================================================== */}

      <header
        className={`
          fixed
          z-[100]

          flex
          items-center

          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? `
                top-3
                left-4
                right-4

                h-[58px]

                rounded-full

                bg-[#F8F5F1]/95
                backdrop-blur-md

                border
                border-[#D8D0C6]

                shadow-[0_4px_20px_rgba(0,0,0,0.06)]

                px-5
                lg:px-7
              `
              : `
                top-0
                left-0
                right-0

                h-[90px]

                rounded-none

                bg-[#555555]/45
                backdrop-blur-[3px]

                border-b
                border-[#F5F1EB]/10

                px-5
                sm:px-8
                lg:px-12
              `
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <button
          onClick={() => scrollToSection("home")}
          className="
            flex
            items-center
            shrink-0

            hover:opacity-70

            transition-all
            duration-500

            lg:translate-x-[35px]
          "
        >
          <span
            className={`
              ${oranienbaum.className}

              font-normal
              whitespace-nowrap
              leading-none

              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    text-[#2D2A27]
                    text-[17px]
                    sm:text-[20px]
                    tracking-[0.16em]
                  `
                  : `
                    text-[#F8F5F1]
                    text-[18px]
                    sm:text-[24px]
                    lg:text-[24px]
                    tracking-[0.08em]
                  `
              }
            `}
          >
            B.ZAHLEL
          </span>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className={`
            hidden
            lg:flex

            absolute
            left-1/2
            -translate-x-1/2

            items-center

            transition-all
            duration-500

            ${
              scrolled
                ? `
                  gap-7
                  translate-x-[-200px]
                  xl:gap-9
                `
                : `
                  gap-10
                  translate-x-[-250px]
                  xl:gap-12
                `
            }
          `}
        >
          {/* HOME */}

          <button
            onClick={() => scrollToSection("home")}
            className={`
              transition-all
              duration-500

              hover:text-[#B8956A]

              ${
                scrolled
                  ? `
                    text-[12px]
                    text-[#2D2A27]
                    tracking-[0.18em]
                  `
                  : `
                    text-[15px]
                    text-[#F5F1EB]
                  `
              }
            `}
          >
            Home
          </button>

          
          {/* PORTFOLIO */}

          <button
            onClick={() => scrollToSection("portfolio")}
            className={`
              transition-all
              duration-500

              hover:text-[#B8956A]

              ${
                scrolled
                  ? `
                    text-[12px]
                    text-[#2D2A27]
                    tracking-[0.18em]
                  `
                  : `
                    text-[15px]
                    text-[#F5F1EB]
                  `
              }
            `}
          >
            Portfolio
          </button>

          {/* SERVICES */}

          <button
            onClick={() => scrollToSection("services")}
            className={`
              transition-all
              duration-500

              hover:text-[#B8956A]

              ${
                scrolled
                  ? `
                    text-[12px]
                    text-[#2D2A27]
                    tracking-[0.18em]
                  `
                  : `
                    text-[15px]
                    text-[#F5F1EB]
                  `
              }
            `}
          >
            Services
          </button>

          {/* PROCESS */}

          <button
            onClick={() => scrollToSection("process")}
            className={`
              transition-all
              duration-500

              hover:text-[#B8956A]

              ${
                scrolled
                  ? `
                    text-[12px]
                    text-[#2D2A27]
                    tracking-[0.18em]
                  `
                  : `
                    text-[15px]
                    text-[#F5F1EB]
                  `
              }
            `}
          >
            Process
          </button>


          
           {/* CONTACT */}

          <button
            onClick={() => scrollToSection("contact")}
            className={`
              transition-all
              duration-500

              hover:text-[#B8956A]

              ${
                scrolled
                  ? `
                    text-[12px]
                    text-[#2D2A27]
                    tracking-[0.18em]
                  `
                  : `
                    text-[15px]
                    text-[#F5F1EB]
                  `
              }
            `}
          >
            Contact Us
           </button>


        </nav>

        {/* =================================================
            DESKTOP RIGHT SIDE
        ================================================= */}

        <div
          className={`
            hidden
            lg:flex

            ml-auto

            items-center

            transition-all
            duration-500

            ${
              scrolled
                ? `
                  gap-4
                  translate-x-[880px]
                `
                : `
                  gap-7
                  translate-x-[750px]
                `
            }
          `}
        >
        

          {/* =================================================
              BOOK CONSULTATION
          ================================================= */}

          <Link
            href="/start-project"
            className={`
              flex
              flex-col
              items-center
              justify-center

              border

              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    w-[200px]
                    h-[34px]

                    border-[#2D2A27]/40
                    text-[#2D2A27]

                    hover:bg-[#454B47]
                    hover:text-[#F8F5F1]

                    translate-x-[30px]
                  `
                  : `
                    w-[230px]
                    h-[40px]

                    border-[#F5F1EB]/60
                    text-[#F5F1EB]

                    hover:bg-[#F5F1EB]
                    hover:text-[#454B47]

                    translate-x-[140px]
                  `
              }
            `}
          >
            <span
              className={`
                uppercase

                transition-all
                duration-500

                ${
                  scrolled
                    ? `
                      text-[8px]
                      tracking-[0.20em]
                    `
                    : `
                      text-[10px]
                      tracking-[0.24em]
                    `
                }
              `}
            >
              Book a Consultation
            </span>

            {!scrolled && (
              <span
                className="
                  mt-1
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  opacity-70
                "
              >
                Begin Your Project
              </span>
            )}
          </Link>
        </div>

        {/* =================================================
            MOBILE HAMBURGER
        ================================================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className={`
            lg:hidden

            ml-auto

            flex
            items-center
            justify-center

            transition-all
            duration-500

            ${
              scrolled
                ? `
                  w-9
                  h-9
                  text-[#2D2A27]
                `
                : `
                  w-11
                  h-11
                  text-[#F5F1EB]
                `
            }
          `}
          style={{
            transform: "translateX(200px)",
          }}
        >
          {menuOpen ? (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M5 5L19 19" />
              <path d="M19 5L5 19" />
            </svg>
          ) : (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[90]

            bg-[#F8F5F1]
            text-[#1A1A1A]

            overflow-y-auto
          "
        >
          {/* =================================================
              MOBILE MENU HEADER
          ================================================= */}

          <div
            className="
              relative
              h-[88px]
              w-full

              border-b
              border-[#1A1A1A]/10
            "
          >
            {/* BRAND */}

            <button
              onClick={() => {
                scrollToSection("home");
                setMenuOpen(false);
              }}
              className="
                absolute
                top-1/2
                -translate-y-1/2

                left-[90px]
                sm:left-[130px]
                md:left-[160px]

                font-display
                text-[1.35rem]
                tracking-[0.18em]
                text-[#1A1A1A]
              "
            >
              B.ZAHLEL
            </button>

            {/* CLOSE */}

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              className="
                absolute
                top-1/2
                -translate-y-1/2

                right-6

                flex
                items-center
                justify-center

                w-10
                h-10

                text-[#1A1A1A]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* =================================================
              MENU LINKS
          ================================================= */}

          <div className="px-6">
            {/* HOME */}

            <button
              onClick={() => scrollToSection("home")}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Home</span>
              <span className="text-[13px] opacity-50">→</span>
            </button>

            
            {/* PORTFOLIO */}

            <button
              onClick={() => scrollToSection("portfolio")}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Portfolio</span>
              <span className="text-[13px] opacity-50">→</span>
            </button>

            {/* SERVICES */}

            <button
              onClick={() => scrollToSection("services")}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Services</span>
              <span className="text-[13px] opacity-50">→</span>
            </button>

            {/* PROCESS */}

            <button
              onClick={() => scrollToSection("process")}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Process</span>
              <span className="text-[13px] opacity-50">→</span>
            </button>

            {/* START PROJECT */}

            <Link
              href="/start-project"
              onClick={() => setMenuOpen(false)}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Start Project</span>
              <span className="text-[13px] opacity-50">→</span>
            </Link>

            {/* CONTACT */}

            <button
              onClick={() => scrollToSection("contact")}
              className="
                w-full
                min-h-[76px]

                flex
                items-center
                justify-between

                border-b
                border-[#1A1A1A]/10

                text-left
                text-[1.15rem]

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Contact Us</span>
              <span className="text-[13px] opacity-50">→</span>
            </button>

            {/* =================================================
                CONSULTATION BUTTON
            ================================================= */}

            <div
              className="
                flex
                justify-center
                pt-10
              "
            >
              <Link
                href="/start-project"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  max-w-[260px]
                  min-h-[64px]

                  border
                  border-[#1A1A1A]/60

                  flex
                  flex-col
                  items-center
                  justify-center

                  text-[#1A1A1A]

                  hover:bg-[#454B47]
                  hover:text-[#F8F5F1]

                  transition-all
                  duration-300
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    font-medium
                  "
                >
                  Book a Consultation
                </span>

                <span
                  className="
                    mt-1
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    opacity-60
                  "
                >
                  Begin Your Project
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}