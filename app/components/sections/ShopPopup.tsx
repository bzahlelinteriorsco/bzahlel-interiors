
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Oranienbaum } from "next/font/google";
import { useEffect, useState } from "react";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
});

export default function ShopPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("bzahlel-quote-popup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setOpen(false);
    sessionStorage.setItem("bzahlel-quote-popup", "true");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/45
            px-4
            py-6
          "
        >
          {/* POPUP */}

          <motion.div
            initial={{
              opacity: 0,
              x: 150,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 150,
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              w-full
              max-w-[900px]
              h-[400px]
              grid
              grid-cols-1
              md:grid-cols-2
              overflow-hidden
              bg-[#F5F1EB]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            "
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="
                absolute
                z-20
                top-5
                right-5
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-[#3A3530]/40
                text-[#3A3530]
                transition-all
                duration-300
                hover:bg-[#454B47]
                hover:text-[#F5F1EB]
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>

            {/* LEFT IMAGE */}

            <div
              className="
                relative
                hidden
                md:block
                min-h-[500px]
              "
            >
              <Image
                src="/process.png"
                alt="B.ZAHLEL INTERIORS"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* RIGHT CONTENT */}

            <div
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                px-8
                sm:px-14
                lg:px-20
                py-20
                text-center
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
              >
                

                <h2
                  className={`
                    ${oranienbaum.className}
                    text-[46px]
                    sm:text-[55px]
                    lg:text-[55px]
                    leading-[1]
                    font-normal
                    text-[#3A3530]
                    translate-y-[80px]
                    lg:translate-y-[-100px]
                  `}
                >
                  Request a Quote
                </h2>

                {/* TEXT */}

                <p
                  className="
                    max-w-[420px]
                    mx-auto
                    mt-7
                    text-[14px]
                    sm:text-[15px]
                    leading-[1.9]
                    text-[#3A3530]/70
                    translate-y-[80px]
                    lg:translate-y-[-70px]
                  "
                >
                  Tell us a little about your project, and our team will be in
                  touch to discuss your needs, ideas, and investment.
                </p>

                {/* CTA */}

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-4
                    mt-10
                  "
                >
                  <Link
                    href="/start-project"
                    onClick={closePopup}
                    className="
                      flex
                      items-center
                      justify-center
                      w-[240px]
                      h-[52px]
                      bg-[#454B47]
                      text-[#F8F5F1]
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      transition-all
                      duration-500
                      hover:bg-[#B8956A]
                      hover:scale-[1.02]
                      translate-y-[80px]
                      lg:translate-y-[-20px]
                    "
                  >
                    Request a Quote
                  </Link>

                  <button
                    onClick={closePopup}
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.2em]
                      text-[#3A3530]/50
                      hover:text-[#3A3530]
                      transition-colors
                      translate-y-[80px]
                      lg:translate-y-[0px]
                    "
                  >
                    Continue to explore →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
