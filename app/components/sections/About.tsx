"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F5F1] py-40 overflow-hidden"
    >
      <div className="max-w-[1750px] mx-auto px-24">

        <div className="grid lg:grid-cols-[55%_45%] gap-24 items-center">

         {/* LEFT */}

<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2
    className="
      relative
      font-display
      text-[1.8rem]
      sm:text-[2.5rem]
      lg:text-[3.5rem]
      leading-none
      text-[#1B1B1B]
      mb-10
      lg:mb-20
      left-[0px]
      lg:left-[80px]
      top-[65px]
      lg:-top-[160px]
      text-center
      lg:text-left
    "
  >
    Our Philosophy
  </h2>

       <p
  className="
    relative
    max-w-full
    lg:max-w-2xl
    w-[140px]
    lg:w-[600px]
    text-[0.5rem]
    lg:text-[1.1rem]
    leading-3.5
    lg:leading-[2.2]
    text-[#4B4B4B]
    font-bold
    mb-8
    lg:mb-16
    left-[15px]
    lg:left-[80px]
    top-[90px]
    lg:-top-[150px]
    text-left
    lg:text-left
  "
>
  DESIGNING INTERIORS THAT FEEL
  TIMELESS, INTENTIONAL AND DEEPLY PERSONAL.
</p>

            {/* Body */}

<div className="w-full lg:w-[500px] space-y-8 lg:space-y-10">
  <p
    className="
      relative
      w-[170px]
    lg:w-[600px]
      text-[0.5rem]
      lg:text-[0.9rem]
      leading-3.5
      lg:leading-[1.8]
      text-[#4B4B4B]
      left-[15px]
      lg:left-[80px]
      top-[110px]
      lg:-top-[120px]
      text-left
      lg:text-left
    "
  >
    At B.ZAHLEL INTERIORS, we believe every space should reflect the people who
    live, work, and gather within it. Great design is more than creating
    beautiful interiors, it's about shaping environments that inspire,
    function effortlessly, and stand the test of time.

    <br />

    Our approach is rooted in thoughtful planning, refined aesthetics, and
    exceptional craftsmanship. We carefully balance elegance, comfort, and
    practicality to create spaces that feel authentic, purposeful, and
    uniquely tailored to each client.
  </p>

  <p
    className="
      relative w-[170px]
    lg:w-[600px]
      text-[0.5rem]
      lg:text-[0.9rem]
      leading-3.5
      lg:leading-[1.8]
      text-[#4B4B4B]
      left-[15px]
      lg:left-[80px]
      top-[120px]
      lg:top-[-100px]
      text-left
      lg:text-left
    "
  >
    Whether designing residential, commercial, hospitality, or public spaces,
    we are committed to delivering interiors that combine timeless design with
    lasting quality. Every project is approached with care, creativity, and
    attention to detail, ensuring each space is not only visually striking but
    also meaningful, functional, and built to endure.
  </p>
</div>

          </motion.div>

          {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 180 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.2,
  }}

  className="
    relative
    h-[500px]
    sm:h-[200px]
    lg:h-[900px]
    left-0
    lg:-left-[80px]
    mt-12
    lg:mt-0
  "
>
  {/* Main Image */}

  <div
    className="
      absolute
      bottom-125
      lg:bottom-70
      left-[79%]
      -translate-x-1/2
      w-[50%]
      max-w-[380px]
      h-[350px]
      sm:max-w-[450px]
      sm:h-[200px]
      lg:left-auto
      lg:translate-x-1
      lg:right-30
      lg:w-[860px]
      lg:h-[560px]
      rounded-sm
      overflow-hidden
      shadow-2xl
    "
  >
    <Image
      src="/about-detail.png"
      alt="About Detail"
      fill
      sizes="(max-width: 1024px) 90vw, 560px"
      className="object-cover"
    />
  </div>
</motion.div>

        </div>

      </div>
    </section>
  );
}