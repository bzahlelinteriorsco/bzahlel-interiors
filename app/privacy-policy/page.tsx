"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/sections/Footer";

export default function PrivacyPolicyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     GO TO HOMEPAGE SECTION
  ===================================================== */

  const goToHomeSection = (id: string) => {
    setMenuOpen(false);
    window.location.href = `/#${id}`;
  };

  /* =====================================================
     SCROLL TO FOOTER / CONTACT ON THIS PAGE
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

  return (
    <main className="min-h-screen bg-[#F8F5F1] text-[#4C2D17]">

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

          h-[90px]

          rounded-none

          bg-[#555555]/45
          backdrop-blur-[3px]

          border-b
          border-[#F5F1EB]/10

          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

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
            className="
              font-display
              font-normal
              whitespace-nowrap
              leading-none

              text-[#F8F5F1]

              text-[18px]
              sm:text-[24px]
              lg:text-[24px]

              tracking-[0.08em]
            "
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

            translate-x-[300px]
          "
        >

          {/* HOME */}

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


          

          {/* PORTFOLIO */}

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


          {/* SERVICES */}

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


          {/* PROCESS */}

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


          {/* =================================================
              CONTACT
              SCROLLS TO FOOTER ON PRIVACY PAGE
          ================================================= */}

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


          {/* DIVIDER */}

          <span
            className="
              w-px
              h-12
              bg-[#F5F1EB]/20
            "
          />


          {/* =================================================
              BOOK A CONSULTATION
          ================================================= */}

          <Link
            href="/start-project"
            className="
              flex
              flex-col
              items-center
              justify-center

              w-[230px]
              h-[40px]

              border
              border-[#F5F1EB]/60

              text-[#F5F1EB]

              transition-all
              duration-300

              hover:bg-[#F5F1EB]
              hover:text-[#454B47]
              
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.24em]
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
                opacity-70
              "
            >
              Begin Your Project
            </span>

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

            /* X */

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

            /* HAMBURGER */

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
              MOBILE HEADER
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

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                top-1/2
                -translate-y-1/2

                left-6

                font-display
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


          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <div className="px-6">

            {/* HOME */}

            <button
              onClick={() => goToHomeSection("home")}
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
              <span>
                Home
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </button>


           


            {/* PORTFOLIO */}

            <button
              onClick={() => goToHomeSection("portfolio")}
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
              <span>
                Portfolio
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </button>


            {/* SERVICES */}

            <button
              onClick={() => goToHomeSection("services")}
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
              <span>
                Services
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </button>


            {/* PROCESS */}

            <button
              onClick={() => goToHomeSection("process")}
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
              <span>
                Process
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </button>


            {/* =================================================
                START PROJECT
            ================================================= */}

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

                text-[#B8956A]
              "
            >
              <span>
                Start Project
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </Link>


            {/* =================================================
                CONTACT
                SCROLLS TO FOOTER
            ================================================= */}

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

                font-display
                text-[#1A1A1A]

                hover:text-[#B8956A]

                transition-colors
              "
            >
              <span>
                Contact Us
              </span>

              <span className="text-[13px] opacity-50">
                →
              </span>
            </button>


            {/* =================================================
                MOBILE CONSULTATION BUTTON
            ================================================= */}

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


      {/* =====================================================
          PRIVACY POLICY CONTENT
      ===================================================== */}

      <div
        className="
          w-[85%]
          sm:w-[95%]
          lg:w-full

          max-w-5xl

          mx-auto

          pb-24

          translate-x-[35px]
          lg:translate-x-[100px]
          
          translate-y-[35px]
          lg:translate-y-[-15px]

        "
        style={{
          paddingTop: "150px",
        }}
      >

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="text-center mt-10">

          <h1
            className="
              font-display

              text-3xl
              md:text-4xl

              font-light

              leading-none
            "
          >
            Privacy Policy
          </h1>

        </div>


        {/* =================================================
            EFFECTIVE DATE
        ================================================= */}

        <section className="mb-20">

          <p
            className="
              mx-auto

              max-w-[280px]
              sm:max-w-none

              uppercase

              tracking-[0.25em]
              sm:tracking-[0.35em]

              text-[9px]
              sm:text-sm

              text-[#B8956A]

              text-center

              leading-[1.8]
            "
            style={{
              marginTop: "20px",
            }}
          >
            Last updated and Effective Date: 1 August 2026
          </p>

        </section>


        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section
          className="mb-24"
          style={{
            marginTop: "20px",
          }}
        >

          <h2 className="font-display text-4xl font-light mb-8">
            Introduction
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Welcome to <strong>B.ZAHLEL INTERIORS</strong> ("B.ZAHLEL", "we",
            "our", or "us").
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            At B.ZAHLEL INTERIORS, we understand that privacy is fundamental to
            building meaningful relationships with our clients. Whether you are
            browsing our portfolio, requesting a consultation, subscribing to
            our newsletter, joining our WhatsApp community, or engaging our
            interior design services, you entrust us with personal information
            that deserves transparency, respect and protection.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            This Privacy Policy explains how we collect, use, disclose, store,
            protect and process your personal information whenever you interact
            with our website or our services.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            By accessing our website or using any of our services, you acknowledge
            that you have read and understood this Privacy Policy.
          </p>

        </section>


        {/* =================================================
            SCOPE
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Scope of This Policy
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            This Privacy Policy applies to all personal information collected by
            B.ZAHLEL INTERIORS through:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>Our official website</li>
            <li>Consultation request forms</li>
            <li>Project enquiry forms</li>
            <li>Newsletter subscriptions</li>
            <li>WhatsApp communications</li>
            <li>Email correspondence</li>
            <li>Telephone conversations</li>
            <li>Social media platforms</li>
            <li>Interior design consultations</li>
            <li>Future digital services operated by B.ZAHLEL INTERIORS</li>

          </ul>

          <p className="mt-10 text-[#666] text-sm leading-[2.2] font-light">
            This Privacy Policy does not apply to third-party websites linked
            from our website. We encourage you to review their respective privacy
            policies independently.
          </p>

        </section>


        {/* =================================================
            INFORMATION WE COLLECT
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Information We Collect
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            To provide exceptional interior design services, we may collect
            different categories of personal information depending on how you
            interact with B.ZAHLEL INTERIORS. We only collect information that
            is relevant and necessary for the purposes outlined in this Privacy
            Policy.
          </p>

        </section>


        {/* =================================================
            INFORMATION YOU PROVIDE
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-3xl font-light mb-8">
            Information You Provide
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            When you voluntarily communicate with us, request a consultation or
            engage our services, you may provide information including:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>WhatsApp number</li>
            <li>Project location</li>
            <li>Property type</li>
            <li>Project budget</li>
            <li>Preferred consultation method</li>
            <li>Preferred consultation date and time</li>
            <li>Interior design preferences</li>
            <li>Project descriptions</li>
            <li>Messages submitted through our contact forms</li>
            <li>
              Images or inspiration references you voluntarily upload or share
            </li>

          </ul>

        </section>


        {/* =================================================
            INFORMATION COLLECTED AUTOMATICALLY
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-3xl font-light mb-8">
            Information Collected Automatically
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            When you browse our website, certain information may be collected
            automatically through cookies and analytics technologies, including:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>IP address</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on the website</li>
            <li>Referral sources</li>
            <li>Approximate geographic location</li>
            <li>Website interaction data</li>

          </ul>

        </section>


        {/* =================================================
            INFORMATION FROM THIRD PARTIES
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-3xl font-light mb-8">
            Information From Third Parties
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            We may receive limited information from trusted third-party services
            including Instagram, Pinterest, TikTok, Google Analytics and other
            marketing platforms where you choose to interact with our business.
            Such information is governed by the respective privacy policies of
            those providers.
          </p>

        </section>


        {/* =================================================
            HOW WE USE YOUR INFORMATION
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            How We Use Your Information
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            B.ZAHLEL INTERIORS uses the personal information we collect only for
            legitimate business purposes and in accordance with applicable data
            protection laws. Depending on how you interact with us, we may use your
            information for the following purposes:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>
              Responding to enquiries and consultation requests.
            </li>

            <li>
              Scheduling design consultations and project meetings.
            </li>

            <li>
              Preparing quotations, proposals and interior design concepts.
            </li>

            <li>
              Providing our interior design and project management services.
            </li>

            <li>
              Communicating project updates throughout the design process.
            </li>

            <li>
              Sending invoices, receipts and payment confirmations.
            </li>

            <li>
              Improving the functionality, security and performance of our website.
            </li>

            <li>
              Understanding visitor behaviour through website analytics.
            </li>

            <li>
              Sending newsletters, design inspiration and company updates where you
              have chosen to receive them.
            </li>

            <li>
              Providing customer support before, during and after project completion.
            </li>

            <li>
              Protecting our business against fraud, misuse and unauthorized
              activities.
            </li>

            <li>
              Complying with legal, regulatory and contractual obligations.
            </li>

          </ul>

        </section>


        {/* =================================================
            SHARING YOUR INFORMATION
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Sharing Your Information
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            B.ZAHLEL INTERIORS values your trust and does not sell your personal
            information. We only share your information where necessary to provide
            our services, comply with legal obligations, or operate our business
            effectively.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            Your personal information may be shared with:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>
              Trusted service providers who assist us in operating our website.
            </li>

            <li>
              Payment processing providers where applicable.
            </li>

            <li>
              Email marketing and newsletter platforms.
            </li>

            <li>
              Cloud hosting and secure data storage providers.
            </li>

            <li>
              Professional advisers, including accountants, auditors and legal advisers.
            </li>

            <li>
              Government authorities or regulators where disclosure is required by law.
            </li>

            <li>
              Contractors and consultants engaged in delivering our interior design services.
            </li>

          </ul>

          <p className="mt-10 text-[#666] text-sm leading-[2.2] font-light">
            All third parties receiving personal information are expected to maintain
            appropriate security measures and process your information only for the
            purposes for which it was shared.
          </p>

        </section>


        {/* =================================================
            PAYMENT INFORMATION
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Payment Information
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Payments for our services may be processed through trusted third-party
            payment providers. B.ZAHLEL INTERIORS does not store your complete credit
            card or debit card details on our servers.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            Payment information is processed securely in accordance with the security
            standards of the respective payment provider. We encourage you to review
            the privacy policies of any payment service you choose to use.
          </p>

        </section>


        {/* =================================================
            INTERNATIONAL DATA TRANSFERS
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            International Data Transfers
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Some of the technology providers that support our website and business
            operations may store or process information outside Kenya.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            Where international transfers occur, we take reasonable steps to ensure
            that your personal information receives an appropriate level of protection
            consistent with applicable data protection laws.
          </p>

        </section>


        {/* =================================================
            DATA SECURITY
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Data Security
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Protecting your information is an important part of how we operate.
            B.ZAHLEL INTERIORS maintains reasonable administrative, technical and
            organisational safeguards designed to protect personal information against
            accidental loss, unauthorised access, alteration, disclosure or misuse.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            These measures may include encrypted website connections, secure hosting,
            restricted access to personal information and regular reviews of our
            security practices.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            Although we strive to protect your information, no method of transmitting
            or storing data electronically can be guaranteed to be completely secure.
            Accordingly, we cannot guarantee absolute security.
          </p>

        </section>


        {/* =================================================
            DATA RETENTION
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Data Retention
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            We retain personal information only for as long as necessary to fulfil the
            purposes described in this Privacy Policy or as required by applicable law.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            Factors that determine our retention periods include:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>
              The duration of our relationship with you.
            </li>

            <li>
              Our legal and regulatory obligations.
            </li>

            <li>
              Accounting and tax record requirements.
            </li>

            <li>
              The resolution of disputes or contractual matters.
            </li>

            <li>
              Business and operational needs.
            </li>

          </ul>

          <p className="mt-10 text-[#666] text-sm leading-[2.2] font-light">
            Once personal information is no longer required, we securely delete,
            anonymise or otherwise dispose of it in accordance with applicable laws
            and recognised industry practices.
          </p>

        </section>


        {/* =================================================
            YOUR PRIVACY RIGHTS
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Your Privacy Rights
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Depending on your location and the applicable data protection laws, you
            may have certain rights regarding the personal information that B.ZAHLEL
            INTERIORS collects and processes about you.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-10">
            Subject to applicable law, these rights may include:
          </p>

          <ul className="list-disc pl-8 space-y-5 text-[#666] text-sm leading-[2.1] font-light">

            <li>
              The right to access the personal information we hold about you.
            </li>

            <li>
              The right to request correction of inaccurate or incomplete information.
            </li>

            <li>
              The right to request deletion of your personal information where legally permissible.
            </li>

            <li>
              The right to withdraw consent where processing is based on your consent.
            </li>

            <li>
              The right to object to or restrict certain processing activities.
            </li>

            <li>
              The right to request a copy of your personal information in a portable format where applicable.
            </li>

            <li>
              The right to lodge a complaint with the relevant data protection authority if you believe your privacy rights have been violated.
            </li>

          </ul>

          <p className="mt-10 text-[#666] text-sm leading-[2.2] font-light">
            We may need to verify your identity before responding to certain requests
            in order to protect your personal information and comply with applicable
            legal requirements.
          </p>

        </section>


        {/* =================================================
            EXERCISING YOUR RIGHTS
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Exercising Your Rights
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            If you wish to exercise any of your privacy rights, update your personal
            information or make a privacy-related enquiry, you may contact
            B.ZAHLEL INTERIORS using the contact details provided at the end of this
            Privacy Policy.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            We will acknowledge your request and respond within a reasonable period,
            subject to any legal obligations and verification requirements.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            In certain circumstances, we may be unable to comply with a request where
            applicable laws require us to retain specific information or where an
            exemption under the law applies.
          </p>

        </section>


        {/* =================================================
            CHILDREN'S PRIVACY
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Children's Privacy
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Our website and services are intended for individuals aged eighteen (18)
            years and above. We do not knowingly collect personal information from
            children.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            If you believe that a child has provided us with personal information,
            please contact us promptly. Where appropriate, we will take reasonable
            steps to delete such information from our records.
          </p>

        </section>


        {/* =================================================
            THIRD-PARTY WEBSITES
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Third-Party Websites
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            Our website may contain links to third-party websites, social media
            platforms or external services for your convenience.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            B.ZAHLEL INTERIORS is not responsible for the privacy practices, security
            measures or content of external websites. We encourage you to review the
            privacy policies of any third-party websites you visit.
          </p>

        </section>


        {/* =================================================
            CHANGES TO THIS PRIVACY POLICY
        ================================================= */}

        <section className="mb-24">

          <h2 className="font-display text-4xl font-light mb-8">
            Changes to This Privacy Policy
          </h2>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            B.ZAHLEL INTERIORS may update this Privacy Policy from time to time to
            reflect changes in our services, business operations, legal obligations,
            industry standards or technological developments.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light mb-8">
            When we make material changes, we will revise the "Last Updated" date at
            the beginning of this Privacy Policy and, where appropriate, provide
            additional notice through our website or other communication channels.
          </p>

          <p className="text-[#666] text-sm leading-[2.2] font-light">
            We encourage you to review this Privacy Policy periodically to remain
            informed about how we collect, use and protect your personal information.
          </p>

        </section>


        {/* =================================================
            FINAL STATEMENT
        ================================================= */}

        <section
          className="pb-8"
          style={{
            marginTop: "80px",
          }}
        >

          <div className="border-t border-[#D8CFC6] pt-12">

            <p className="text-center text-[#666] text-sm leading-[2.2] font-light italic">
              Thank you for placing your trust in B.ZAHLEL INTERIORS. We are committed
              to protecting your privacy with the same care, attention and integrity
              that we bring to every space we design.
            </p>

          </div>

        </section>

      </div>


      {/* =====================================================
          FOOTER / CONTACT
      ===================================================== */}

      <div
        id="contact"
        className="
          relative
          scroll-mt-[100px]
        "
      >
        <Footer />
      </div>

    </main>
  );
}