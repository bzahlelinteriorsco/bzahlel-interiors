"use client";

import { useState } from "react";
import Link from "next/link";
import { Oranienbaum } from "next/font/google";
import Footer from "../components/sections/Footer";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
});

export default function StartProject() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Full-Service");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [completionTimeframe, setCompletionTimeframe] = useState("");
  const [budget, setBudget] = useState("");
  const [startTimeframe, setStartTimeframe] = useState("");
  const [projectStyle, setProjectStyle] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  /* =====================================================
     GO TO HOMEPAGE SECTION
  ===================================================== */

  const goToHomeSection = (id: string) => {
    setMenuOpen(false);
    window.location.href = `/#${id}`;
  };

  /* =====================================================
     GO TO CONTACT / FOOTER
  ===================================================== */

  const scrollToContact = () => {
    setMenuOpen(false);

    setTimeout(() => {
      const contact = document.getElementById("contact");

      if (contact) {
        contact.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* =====================================================
     SUBMIT FORM
  ===================================================== */

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          city,
          state,
          squareFootage,
          completionTimeframe,
          budget,
          startTimeframe,
          projectStyle,
          pinterest,
          reason,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your enquiry has been sent successfully.");

        setName("");
        setEmail("");
        setPhone("");
        setService("Full-Service");
        setCity("");
        setState("");
        setSquareFootage("");
        setCompletionTimeframe("");
        setBudget("");
        setStartTimeframe("");
        setProjectStyle("");
        setPinterest("");
        setReason("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#171717]">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-[100]

          flex
          items-center

          h-[100px]

          bg-[#555555]/45
          backdrop-blur-[3px]

          border-b
          border-[#F5F1EB]/10

          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            items-center
            shrink-0

            hover:opacity-70

            transition-opacity
            duration-300

            lg:translate-x-[35px]
          "
        >
          <span
            className={`
              ${oranienbaum.className}

              font-normal
              whitespace-nowrap
              leading-none

              text-[#F8F5F1]

              text-[18px]
              sm:text-[24px]
              lg:text-[24px]

              tracking-[0.08em]
            `}
          >
            B.ZAHLEL
          </span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          className="
            hidden
            lg:flex

            items-center

            gap-10
            xl:gap-12

            ml-auto

            translate-x-[240px]
          "
        >
          <Link
            href="/#home"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            About
          </Link>

          <Link
            href="/#portfolio"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            Portfolio
          </Link>

          <Link
            href="/#services"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            Services
          </Link>

          <Link
            href="/#process"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            Process
          </Link>

          <Link
            href="#contact"
            className="
              text-[15px]
              text-[#F5F1EB]

              transition-colors
              duration-300

              hover:text-[#B8956A]
            "
          >
            Contact Us
          </Link>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="
            lg:hidden

            ml-auto

            flex
            items-center
            justify-center

            w-11
            h-11

            text-[#F5F1EB]
          "
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
          {/* MOBILE HEADER */}

          <div
            className="
              relative
              h-[88px]
              w-full

              border-b
              border-[#1A1A1A]/10
            "
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                top-1/2
                -translate-y-1/2

                left-6

                text-[1.35rem]
                tracking-[0.18em]

                text-[#1A1A1A]
              "
            >
              B.ZAHLEL
            </Link>

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

          {/* MOBILE LINKS */}

          <div className="px-6">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Portfolio", "portfolio"],
              ["Services", "services"],
              ["Process", "process"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => goToHomeSection(id)}
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

                  text-[#1A1A1A]

                  hover:text-[#B8956A]

                  transition-colors
                "
              >
                <span>{label}</span>

                <span className="text-[13px] opacity-50">→</span>
              </button>
            ))}

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

                text-[#B8956A]
              "
            >
              <span>Start Project</span>

              <span className="text-[13px] opacity-50">→</span>
            </Link>

            {/* CONTACT */}

            <button
              onClick={scrollToContact}
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

                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>Contact Us</span>

              <span className="text-[13px] opacity-50">→</span>
            </button>

            {/* MOBILE CONSULTATION BUTTON */}

            <div
              className="
                flex
                justify-center

                pt-10
                pb-10
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
                  Start Your Project
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative

          h-[500px]
          lg:h-[300px]

          w-full

          overflow-hidden
        "
      >
        {/* HERO IMAGE */}

        <img
          src="/startproject.png"
          alt="B.ZAHLEL Interiors"
          className="
            absolute

            top-0
            left-0

            w-full
            h-full

            object-cover

            z-0
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute

            inset-0

            bg-black/30

            z-[1]

            pointer-events-none
          "
        />

        {/* HERO TEXT */}

        <div
          className="
            absolute

            inset-0

            z-10

            flex
            items-center
            justify-center

            text-center
            text-[#F8F5F1]

            pointer-events-none
          "
        >
          <div>
            <h1
              className="
                text-4xl
                lg:text-6xl

                font-light

                tracking-wide

                translate-y-[30px]
              "
            >
              Begin Your Project
            </h1>

            <p
              className="
                mt-5

                text-sm
                lg:text-base

                font-light

                opacity-90

                translate-y-[60px]
              "
            >
              Every beautiful space begins with a conversation.
              <br />
              Book a private consultation to discuss your vision,
              your needs, and the possibilities for your space.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + CONSULTATION OPTIONS
      ===================================================== */}

      <section
        className="
          relative
          z-20

          min-h-[800px]

          bg-[#F8F6F3]

          pt-[180px]
          lg:pt-[240px]

          pb-[220px]
        "
      >
        <div
          className="
            w-full
            max-w-[1500px]

            mx-auto

            px-6
            lg:px-12

            flex
            flex-col
            lg:flex-row

            items-start

            gap-16
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT — INTRO + PROJECT FORM
          ================================================= */}

          <div
            className="
              w-full
              lg:w-[50%]

              translate-y-[50px]
              translate-x-[40px]
            "
          >
            {/* SMALL INTRO — ABOVE FORM */}

            <div className="mb-14">
              <h2
                className={`
                  ${oranienbaum.className}

                  text-[30px]
                  lg:text-[34px]

                  leading-[1.5]

                  font-normal

                  text-[#333333]
                  translate-y-[-30px]
                  translate-x-[0px]
                `}
              >
                Start the conversation.
              </h2>
            </div>

            {/* PROJECT FORM */}

            <div
              className="
                w-full

                border-t-[3px]
                border-[#454B47]

                border-l
                border-r
                border-[#E2DED8]

                px-6
                sm:px-8
                lg:px-10

                py-10
                lg:py-16

                translate-y-[-30px]
              "
            >
              {/* ROW 1 — NAME / EMAIL */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2

                  gap-x-4
                  lg:gap-x-6
                "
              >
                {/* NAME */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]
                    "
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]
                    "
                  />
                </div>
              </div>

              {/* PHONE NUMBER */}

              <div className="mt-8">
                <label
                  className="
                    block
                    mb-2

                    text-[15px]
                    text-[#171717]
                  "
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 7XX XXX XXX"
                  className="
                    w-full
                    h-[30px]

                    bg-white

                    border-b
                    border-[#D5D5D5]

                    px-1

                    text-[15px]

                    outline-none

                    focus:border-[#454B47]
                  "
                />
              </div>

              {/* SERVICE */}

              <div className="mt-5">
                <label
                  className="
                    block
                    mb-2

                    text-[15px]
                    text-[#171717]

                    translate-y-[10px]
                  "
                >
                  What type of design services
                </label>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="
                    w-full
                    h-[30px]

                    bg-white

                    border-b
                    border-[#D5D5D5]

                    px-1

                    text-[15px]
                    text-[#171717]

                    outline-none

                    focus:border-[#454B47]

                    translate-y-[20px]
                  "
                >
                  <option>Full-Service</option>
                  <option>Interior Design</option>
                  <option>Interior Fit-Out</option>
                  <option>Space Planning</option>
                  <option>Furniture & Fixtures</option>
                  <option>Joinery & Cabinetry</option>
                  <option>Lighting & Finishes</option>
                  <option>Procurement</option>
                  <option>Project Coordination</option>
                </select>
              </div>

              {/* LOCATION / BUDGET */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2

                  gap-x-4
                  lg:gap-x-6

                  mt-5
                "
              >
                {/* CITY */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]

                      translate-y-[30px]
                    "
                  >
                    Project Location (City)
                  </label>

                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]

                      translate-y-[30px]
                    "
                  />
                </div>

                {/* BUDGET */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]

                      translate-y-[30px]
                    "
                  >
                    Construction Budget (Approx)
                  </label>

                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]

                      translate-y-[30px]
                    "
                  />
                </div>
              </div>

              {/* START / COMPLETION */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2

                  gap-x-4
                  lg:gap-x-6

                  mt-5
                "
              >
                {/* START TIMEFRAME */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]

                      translate-y-[40px]
                    "
                  >
                    Start Timeframe
                  </label>

                  <input
                    type="text"
                    value={startTimeframe}
                    onChange={(e) => setStartTimeframe(e.target.value)}
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]

                      translate-y-[40px]
                    "
                  />
                </div>

                {/* COMPLETION TIMEFRAME */}

                <div>
                  <label
                    className="
                      block
                      mb-2

                      text-[15px]
                      text-[#171717]

                      translate-y-[40px]
                    "
                  >
                    Completion Timeframe
                  </label>

                  <input
                    type="text"
                    value={completionTimeframe}
                    onChange={(e) =>
                      setCompletionTimeframe(e.target.value)
                    }
                    className="
                      w-full
                      h-[30px]

                      bg-white

                      border-b
                      border-[#D5D5D5]

                      px-1

                      text-[15px]

                      outline-none

                      focus:border-[#454B47]

                      translate-y-[40px]
                    "
                  />
                </div>
              </div>

              {/* PROJECT STYLE */}

              <div className="mt-5">
                <label
                  className="
                    block
                    mb-2

                    text-[15px]
                    text-[#171717]

                    translate-y-[50px]
                  "
                >
                  Which B.ZAHLEL Projects Best Align With Your Project?
                </label>

                <input
                  type="text"
                  value={projectStyle}
                  onChange={(e) => setProjectStyle(e.target.value)}
                  className="
                    w-full
                    h-[30px]

                    bg-white

                    border-b
                    border-[#D5D5D5]

                    px-1

                    text-[15px]

                    outline-none

                    focus:border-[#454B47]

                    translate-y-[50px]
                  "
                />
              </div>

              {/* REASON */}

              <div className="mt-5">
                <label
                  className="
                    block
                    mb-2

                    text-[15px]
                    text-[#171717]

                    translate-y-[60px]
                  "
                >
                  What is the main reason you would like to hire an interior
                  designer?
                </label>

                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={5}
                  className="
                    w-full

                    bg-white

                    border
                    border-[#D5D5D5]

                    px-2
                    py-2

                    text-[15px]

                    resize-none

                    outline-none

                    focus:border-[#454B47]

                    translate-y-[60px]
                  "
                />
              </div>

              {/* SUBMIT */}

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    h-[37px]
                    min-w-[170px]

                    translate-y-[60px]

                    border
                    border-[#333333]

                    bg-transparent

                    px-5

                    text-[9px]

                    uppercase
                    tracking-[0.18em]

                    text-[#333333]

                    transition-all
                    duration-300

                    hover:bg-[#454B47]
                    hover:text-white

                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {loading ? "SENDING..." : "START CONVERSATION"}
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONSULTATION OPTIONS
          ================================================= */}

          <aside
            className="
              w-full
              lg:w-[40%]

              lg:pt-[45px]

              lg:sticky
              lg:top-[140px]
            "
          >
            {/* SMALL INTRO */}

            <div className="mb-14">
              <h2
                className={`
                  ${oranienbaum.className}

                  text-[30px]
                  lg:text-[34px]

                  leading-[2.5]

                  font-normal

                  text-[#333333]
                `}
              >
                Choose how you'd like to begin.
              </h2>

              <p
                className="
                  mt-5

                  w-full
                  max-w-[560px]

                  text-[13px]
                  leading-[2.2]

                  text-[#66615B]

                  translate-y-[-20px]
                "
              >
                Whether you are at the beginning of an idea or ready to take
                the next step, we offer two ways to start a conversation about
                your project.
              </p>
            </div>

            {/* ONLINE CONSULTATION */}

            <div
              className="
                border-t
                border-[#CFC9C2]

                pt-7
                pb-10
              "
            >
              <h3
                className={`
                  ${oranienbaum.className}

                  text-[23px]

                  text-[#333333]

                  font-normal
                  translate-y-[10px]
                `}
              >
                Online Initial Consultation
              </h3>

              <p
                className="
                  mt-4

                  text-[12px]
                  leading-[1.8]

                  text-[#66615B]

                  max-w-[560px]
                  translate-y-[20px]
                "
              >
                Ideal for early-stage discussions, interstate or overseas
                clients, or when you need quick clarity before committing to
                next steps. We'll walk through your project goals, site
                context, and key opportunities, giving you a clearer direction
                from wherever you are.
              </p>

              <button
                type="button"
                className="
                  mt-7

                  w-[170px]
                  h-[38px]

                  border
                  border-[#333333]

                  bg-transparent

                  text-[9px]

                  text-[#333333]

                  transition-all
                  duration-300

                  hover:bg-[#454B47]
                  hover:text-[#F8F5F1]

                  uppercase
                  tracking-[0.18em]
                  translate-y-[40px]
                "
              >
                Book Online
              </button>
            </div>

            {/* IN-PERSON CONSULTATION */}

            <div
              className="
                border-t
                border-[#CFC9C2]

                pt-7
                pb-10
                translate-y-[60px]
              "
            >
              <h3
                className={`
                  ${oranienbaum.className}

                  text-[23px]

                  text-[#333333]

                  font-normal
                  translate-y-[15px]
                `}
              >
                In-Person Consultation
              </h3>

              <p
                className="
                  mt-4

                  text-[12px]
                  leading-[1.8]

                  text-[#66615B]

                  max-w-[560px]
                  translate-y-[30px]
                "
              >
                A comprehensive site meeting and tailored design evaluation.
                We will assess your space firsthand, talk through spatial
                dynamics, scope, and budget alignment, providing in-depth
                recommendations to kickstart your project.
              </p>

              <button
                type="button"
                className="
                  mt-7

                  w-[170px]
                  h-[38px]

                  border
                  border-[#333333]

                  bg-transparent

                  text-[9px]

                  text-[#333333]

                  transition-all
                  duration-300

                  hover:bg-[#454B47]
                  hover:text-[#F8F5F1]

                  uppercase
                  tracking-[0.18em]
                  translate-y-[50px]
                "
              >
                Coming Soon!
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
  );
}