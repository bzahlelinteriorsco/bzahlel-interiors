"use client";

import { Oranienbaum } from "next/font/google";
import { useEffect, useState } from "react";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const navigateToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const goToServices = () => {
    setMenuOpen(false);
    window.location.href = "/services";
  };

  /* =====================================================
     NAV ITEM STYLE
  ===================================================== */

  const navItemClass = `
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
  `;

  return (
    <>
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

                h-[70px]

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

                h-[88px]
                lg:h-[110px]

                rounded-none

                bg-[#454B47]

                border-b
                border-[#F5F1EB]/15

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
          onClick={() => navigateToSection("home")}
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
                  translate-x-[-100px]
                  xl:gap-9
                `
                : `
                  gap-10
                  translate-x-[-200px]
                  xl:gap-12
                `
            }
          `}
        >

          {/* HOME */}

          <button
            onClick={() => navigateToSection("home")}
            className={navItemClass}
          >
            Home
          </button>


          {/* PORTFOLIO */}

          <button
            onClick={() => navigateToSection("portfolio")}
            className={navItemClass}
          >
            Portfolio
          </button>


          {/* SERVICES */}

          <button
            onClick={goToServices}
            className={navItemClass}
          >
            Services
          </button>


          {/* PROCESS */}

          <button
            onClick={() => navigateToSection("process")}
            className={navItemClass}
          >
            Process
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
                  translate-x-[880px]
                `
            }
          `}
        >

          {/* DIVIDER */}

          <span
            className={`
              w-px

              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    h-7
                    translate-x-[-15px]
                    bg-[#2D2A27]/15
                  `
                  : `
                    h-12
                    translate-x-[-25px]
                    bg-[#F5F1EB]/20
                  `
              }
            `}
          />


          {/* BOOK CONSULTATION */}

          <button
            onClick={() => navigateToSection("startproject")}
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
                  `
                  : `
                    w-[230px]
                    h-[40px]

                    border-[#F5F1EB]/60
                    text-[#F5F1EB]

                    hover:bg-[#F5F1EB]
                    hover:text-[#454B47]
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

          </button>

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
                navigateToSection("home");
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
              onClick={() => navigateToSection("home")}
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
              onClick={() => navigateToSection("portfolio")}
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
            </button>


            {/* SERVICES */}

            <button
              onClick={goToServices}
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
              onClick={() => navigateToSection("process")}
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
            </button>


            {/* START PROJECT */}

            <button
              onClick={() => navigateToSection("startproject")}
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
            </button>


            {/* CONTACT */}

            <button
              onClick={() => navigateToSection("contact")}
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

              <button
                onClick={() => {
                  navigateToSection("startproject");
                  setMenuOpen(false);
                }}
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

              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
}