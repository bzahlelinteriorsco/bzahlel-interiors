"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async () => {
    if (!newsletterEmail.trim()) {
      alert("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newsletterEmail,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you for joining our mailing list!");
        setNewsletterEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to subscribe at the moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <footer
    id="contact"
    className="
      bg-[#E9DDD2]
      text-[#4C2D17]
      min-h-[600px]
      lg:min-h-[450px]
    "
  >

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
<div
  className="
    max-w-7xl
    mx-auto
    px-6
    sm:px-8
    md:px-10
    lg:px-12
    xl:px-16
    py-20
    sm:py-24
    lg:py-40
  "
>

        {/* ===================================================
            COLUMNS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3
            gap-14
            sm:gap-16
            lg:gap-20
          "
        >

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div
  className="
    flex
    flex-col
    items-center
    text-center
    gap-3
    relative
    top-[0px]
    lg:top-[40px]
    translate-x-[0px]
    lg:translate-x-[45px]
  "
>

            <h3
              className="
                font-display
                text-[1.2rem]
                font-light
                mb-12
              "
            >
              Explore
            </h3>

            <nav className="flex flex-col gap-4">

              <button
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  text-center
                  text-[10px]
                  lg:text-[11px]
                  tracking-[0.12em]
                  uppercase
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                "
              >
                Home
              </button>

              <Link
                href="/#about"
                className="
                  text-[10px]
                  lg:text-[11px]
                  tracking-[0.12em]
                  uppercase
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                "
              >
                About
              </Link>

              <Link
                href="/#portfolio"
                className="
                  text-[10px]
                  lg:text-[11px]
                  tracking-[0.12em]
                  uppercase
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                "
              >
                Portfolio
              </Link>

              <Link
                href="/#services"
                className="
                  text-[10px]
                  lg:text-[11px]
                  tracking-[0.12em]
                  uppercase
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                "
              >
                Services
              </Link>

              <Link
                href="/#process"
                className="
                  text-[10px]
                  lg:text-[11px]
                  tracking-[0.12em]
                  uppercase
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                "
              >
                Process
              </Link>

            </nav>

          </div>


          {/* =================================================
              CONTACT + NEWSLETTER
          ================================================= */}

        <div
  className="
    flex
    flex-col
    sm:items-center
    lg:items-start
    relative
    gap-3
    top-[0px]
    lg:top-[40px]
    translate-x-[-10px]
    lg:translate-x-[0px]
  "
>
  <h3
    className="
      font-display
      text-[1.2rem]
      font-light
    "
  >
    Contact Us
  </h3>

  {/* Contact text/content below */}

            <div className="flex flex-col items-left gap-4">

              <a
                href="mailto:hello@bzahlel.com"
                className="
                  text-[12px]
                  tracking-[0.08em]
                  text-[#6F5A49]
                  hover:text-[#B8956A]
                  transition-colors
                  break-all
                "
              >
                bzahlelinteriors.co@gmail.com
              </a>


              <a
  href="tel:+254701624552"
  className="
    text-[12px]
    tracking-[0.08em]
    text-[#6F5A49]
    hover:text-[#B8956A]
    transition-colors
  "
>
  +254 701 624 552
</a>

              <p
                className="
                  text-[12px]
                  leading-[1.8]
                  tracking-[0.05em]
                  text-[#6F5A49]
                "
              >
                Nairobi, Kenya
              </p>

            </div>


            
            {/* Newsletter */}
<div
  className="
    relative
    z-50
    pointer-events-auto
    flex
    flex-col
    items-center
    lg:items-start
    gap-4
    top-[50px]
    lg:top-[-10px]
    translate-x-[-105px]
    lg:translate-x-[350px]
    translate-y-[-105px]
    lg:translate-y-[-130px]

  "
>
 <h4
              className="
                font-display
                text-[1.2rem]
                font-light
                mb-7
              "
            >
              Join Our Mailing List            </h4>

  <p
    className="
      text-[11px]
      text-center
      lg:text-left
      leading-[1.7]
      w-[250px]
      lg:w-full
      lg:max-w-[380px]
      text-[#6F5A49]
      mb-5
    "
  >
    Be the first to hear about our latest projects, insights and design
    stories.
  </p>

  {/* Email + Button */}
  <div
    className="
      relative
      z-50
      pointer-events-auto
      flex
      flex-col
      sm:flex-row
      w-[250px]
      lg:w-full
      lg:max-w-[380px]
      gap-2
    "
  >
    <input
      type="email"
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
      placeholder="Your email address"
      className="
        relative
        z-50
        pointer-events-auto
        w-[250px]
        h-[43px]
        lg:h-[42px]
        shrink-0
        px-4
        bg-transparent
        border
        border-[#B8956A]/50
        outline-none
        text-[11px]
        text-[#4C2D17]
        text-center
        placeholder:text-[#6F5A49]/60
        focus:border-[#B8956A]
      "
    />

    <button
      type="button"
      disabled={loading}
      onClick={handleNewsletter}
      className="
        relative
        z-50
        pointer-events-auto
        sm:w-[250px]
        lg:w-[150px]
        h-[42px]
        shrink-0
        bg-[#8A8A8A]
        text-white
        text-[9px]
        uppercase
        tracking-[0.12em]
        hover:bg-[#B8956A]
        transition-all
        duration-300
        disabled:opacity-60
        cursor-pointer
      "
    >
      {loading ? "Sending..." : "JOIN NOW"}
    </button>
  </div>
</div>

          </div>


          {/* =================================================
              FOLLOW
          ================================================= */}

         <div
  className="
    flex
    flex-col
    items-center
lg:items-start
    gap-4
    relative
    top-[10px]
    lg:top-[40px]
    translate-x-[100px]
    lg:translate-x-[-90px]
    translate-y-[-105px]
    lg:translate-y-[150px]
    sm:col-span-2
    lg:col-span-1
  "
>

            <h3
              className="
                font-display
                text-[1.2rem]
                font-light
                mb-7
              "
            >
              Follow
            </h3>


            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              {/* Instagram */}

              <a
                href="https://www.instagram.com/bzahlel_design_studio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#B8956A]
                  flex
                  items-center
                  justify-center
                  text-[#4C2D17]
                  hover:bg-[#B8956A]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={18} />
              </a>


              {/* Pinterest */}

              <a
                href="https://pin.it/4btokOLUU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#B8956A]
                  flex
                  items-center
                  justify-center
                  text-[#4C2D17]
                  hover:bg-[#B8956A]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaPinterestP size={18} />
              </a>


              {/* TikTok */}

              <a
                href="https://www.tiktok.com/@bzahlel_design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#B8956A]
                  flex
                  items-center
                  justify-center
                  text-[#4C2D17]
                  hover:bg-[#B8956A]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaTiktok size={18} />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

       <div
  className="
    h-px
    bg-[#B8956A]/30
    mt-20
    sm:mt-24
    lg:mt-20
    relative
    top-[40px]
    lg:top-[90px]
  "
/>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            mt-8
            text-center
            md:text-left
          "
        >

          {/* Copyright */}

        <p
  className="
    text-[9px]
    uppercase
    tracking-[0.16em]
    text-[#6F5A49]
    relative
    top-[50px]
    lg:top-[120px]
    -translate-x-[10px]
    lg:translate-x-[30px]
  "
>
  © {new Date().getFullYear()} B.ZAHLEL INTERIORS . MADE BY ESTHER MWANIKI . ALL RIGHTS RESERVED
</p>


         <div
  className="
    flex
    items-center
    gap-6
    text-[9px]
    uppercase
    tracking-[0.16em]
    text-[#6F5A49]
    relative
    top-[40px]
    lg:top-[120px]
    -translate-x-[10px]
    lg:-translate-x-[40px]
  "
>
<Link href="/privacy-policy">
  Privacy Policy
</Link>
             
            <Link
              href="/terms"
              className="hover:text-[#B8956A] transition-colors"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}