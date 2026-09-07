"use client";

import { useState } from "react";
import Link from "next/link";
import { Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
});

const navigationLinks = [
  {
    name: "Collection",
    href: "/shop-collection",
    subItems: [
      { name: "All Collections", href: "/shop-collection" },
      { name: "New Arrivals", href: "/shop-collection#new" },
      { name: "Best Sellers", href: "/shop-collection#best-sellers" },
    ],
  },
  {
    name: "Living",
    href: "/shop-collection#living",
    subItems: [
      { name: "Sofas & Couches", href: "/shop-collection#sofas" },
      { name: "Coffee Tables", href: "/shop-collection#coffee-tables" },
      { name: "Armchairs", href: "/shop-collection#armchairs" },
      { name: "TV Units", href: "/shop-collection#tv-units" },
    ],
  },
  {
    name: "Dining",
    href: "/shop-collection#dining",
    subItems: [
      { name: "Dining Tables", href: "/shop-collection#dining-tables" },
      { name: "Dining Chairs", href: "/shop-collection#dining-chairs" },
      { name: "Sideboards", href: "/shop-collection#sideboards" },
    ],
  },
  {
    name: "Bedroom",
    href: "/shop-collection#bedroom",
    subItems: [
      { name: "Beds", href: "/shop-collection#beds" },
      { name: "Nightstands", href: "/shop-collection#nightstands" },
      { name: "Dressers", href: "/shop-collection#dressers" },
    ],
  },
  {
    name: "Office",
    href: "/shop-collection#office",
    subItems: [
      { name: "Desks", href: "/shop-collection#desks" },
      { name: "Office Chairs", href: "/shop-collection#office-chairs" },
      { name: "Bookcases", href: "/shop-collection#bookcases" },
    ],
  },
  {
    name: "Lighting",
    href: "/shop-collection#lighting",
    subItems: [
      { name: "Pendant Lights", href: "/shop-collection#pendants" },
      { name: "Table Lamps", href: "/shop-collection#table-lamps" },
      { name: "Floor Lamps", href: "/shop-collection#floor-lamps" },
    ],
  },
  {
    name: "Decor",
    href: "/shop-collection#decor",
    subItems: [
      { name: "Vases & Bowls", href: "/shop-collection#vases" },
      { name: "Mirrors", href: "/shop-collection#mirrors" },
      { name: "Rugs", href: "/shop-collection#rugs" },
    ],
  },
  {
    name: "Outdoor",
    href: "/shop-collection#outdoor",
    subItems: [
      { name: "Outdoor Seating", href: "/shop-collection#outdoor-seating" },
      { name: "Outdoor Tables", href: "/shop-collection#outdoor-tables" },
    ],
  },
];

export default function ShopCollection() {
  const announcements = [
    "BZahlel Store Coming Soon",
    "10% OFF On First Five Store Orders",
    "Be The First To Discover Our Latest Collection",
  ];

  const [announcementIndex] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "create">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="flex h-[42px] items-center justify-center bg-[#454B47] px-4 text-center text-[10px] uppercase tracking-[0.18em] text-[#F8F5F1] sm:text-[11px]">
        <div
          key={announcementIndex}
          className="animate-[announcementFade_0.7s_ease-in-out]"
        >
          {announcements[announcementIndex]}
        </div>
      </div>

      {/* HEADER SECTION */}
      <header
        className="relative z-50 border-b border-[#D8D1C8] bg-[#F8F6F3]
        translate-x-[0px]"
      >
        <div className="mx-auto flex h-[105px] max-w-[1500px] items-center justify-between px-6 lg:px-12">

          {/* SEARCH */}
          <div className="hidden w-[300px] lg:block translate-x-[50px]">
            <div className="relative flex h-[42px] items-center border border-[#4A433D] 
            bg-transparent px-4 text-[#292521]">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full bg-transparent pr-8 text-[12px] tracking-[0.05em]
                text-[#292521] outline-none placeholder:text-[#9A928A] translate-x-[50px]"
              />

              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292521"
                strokeWidth="1.8"
                className="absolute right-3 shrink-0
                
                "
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.2 16.2" />
              </svg>
            </div>
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center"
          >
            <span
              className={`${oranienbaum.className} whitespace-nowrap text-[27px] tracking-[0.08em] text-[#292521] sm:text-[31px]`}
            >
              B.ZAHLEL
            </span>
          </Link>

          {/* HEADER ICONS */}
          <div className="ml-auto flex items-center gap-5 translate-x-[-130px] sm:gap-7">

            {/* USER ICON */}
            <button
              type="button"
              aria-label="Account"
              onClick={() => {
                setAuthMode("signin");
                setErrorMessage("");
                setIsAuthModalOpen(true);
              }}
              className="flex items-center justify-center text-[#292521] transition-opacity hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292521"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21C5 17 8 14.5 12 14.5C16 14.5 19 17 19 21" />
              </svg>
            </button>

            {/* HEART ICON */}
            <button
              type="button"
              aria-label="Favorites"
              className="flex items-center justify-center text-[#292521] transition-opacity hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292521"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* BAG ICON */}
            <button
              type="button"
              aria-label="Shopping bag"
              className="flex items-center justify-center text-[#292521] transition-opacity hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292521"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>

          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden border-t border-[#E1DBD4] lg:block">
          <div className="mx-auto flex h-[62px] max-w-[1500px] items-center justify-center gap-9 px-8 xl:gap-12">

            {navigationLinks.map((item) => (
              <div
                key={item.name}
                className="group relative flex h-full items-center"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[12px] uppercase tracking-[0.17em] text-[#292521] transition-colors hover:text-[#B8956A]"
                >
                  {item.name}

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-200 group-hover:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>

                {/* DROPDOWN */}
                <div className="invisible absolute left-1/2 top-full z-50 min-w-[210px] -translate-x-1/2 border border-[#E1DBD4] bg-[#F8F6F3] py-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="px-5 py-2 text-[11px] uppercase tracking-[0.12em] text-[#524B45] transition-colors hover:bg-[#E9DDD2] hover:text-[#292521]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/"
              className="text-[12px] uppercase tracking-[0.17em] text-[#292521] transition-colors hover:text-[#B8956A]"
            >
              Back To Interior Design
            </Link>

          </div>
        </nav>
      </header>

      {/* MOBILE NAVIGATION */}
      <div className="border-b border-[#D8D1C8] bg-[#F8F6F3] px-5 py-4 lg:hidden">
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap text-[#292521]">

          <Link
            href="/shop-collection"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Collection
          </Link>

          <Link
            href="/shop-collection#living"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Living
          </Link>

          <Link
            href="/shop-collection#dining"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Dining
          </Link>

          <Link
            href="/shop-collection#bedroom"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Bedroom
          </Link>

          <Link
            href="/shop-collection#office"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Office
          </Link>

          <Link
            href="/shop-collection#decor"
            className="text-[10px] uppercase tracking-[0.16em]"
          >
            Decor
          </Link>

        </div>
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#40352D] px-6 py-24 text-center sm:min-h-[470px]">

        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#30271F]/65" />

        <div className="relative z-10 max-w-[950px] text-[#F8F5F1]">

          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#D9C9B8]">
            B.ZAHLEL COLLECTION
          </p>

          <h1
            className={`${oranienbaum.className} text-[42px] leading-tight sm:text-[58px] lg:text-[70px]`}
          >
            COMING SOON!
          </h1>

          <p className="mx-auto mt-6 max-w-[750px] text-[13px] leading-[2] text-[#F8F5F1]/90 sm:text-[15px]">
            SHOP OUR COLLECTION
          </p>

        </div>
      </section>

      {/* AUTH MODAL PLACEHOLDER */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
          <div className="relative w-[90%] max-w-[450px] bg-[#F8F6F3] p-8">

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute right-5 top-4 text-2xl text-[#292521]"
            >
              ×
            </button>

            <h2
              className={`${oranienbaum.className} mb-6 text-center text-3xl text-[#292521]`}
            >
              {authMode === "signin" ? "Sign In" : "Create Account"}
            </h2>

            <div className="space-y-4">

              {authMode === "create" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-[#CFC7BE] bg-transparent p-3 text-sm outline-none"
                />
              )}

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#CFC7BE] bg-transparent p-3 text-sm outline-none"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#CFC7BE] bg-transparent p-3 pr-20 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {authMode === "create" && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-[#CFC7BE] bg-transparent p-3 text-sm outline-none"
                />
              )}

              {errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              {authMode === "signin" && (
                <label className="flex items-center gap-2 text-xs text-[#524B45]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember me
                </label>
              )}

              <button
                type="button"
                disabled={loading}
                className="w-full bg-[#454B47] py-3 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading
                  ? "Please wait..."
                  : authMode === "signin"
                    ? "Sign In"
                    : "Create Account"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthMode(authMode === "signin" ? "create" : "signin");
                  setErrorMessage("");
                }}
                className="w-full text-center text-xs uppercase tracking-wider text-[#524B45] underline"
              >
                {authMode === "signin"
                  ? "Create an account"
                  : "Already have an account? Sign in"}
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}