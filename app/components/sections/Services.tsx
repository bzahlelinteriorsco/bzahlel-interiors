"use client";


import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
});

const services = [
  {
    title: "Interior Design",
    image: "/service1.jpg",
    description:
      "Thoughtfully considered interiors designed around your lifestyle, architecture, and vision. From spatial planning and concept development to materials, lighting, furnishings, and detailed design.",
  },

{
    title: "Institutional Interiors",
    image: "/service6.jpg",
    description:
      "Thoughtful furnishing and styling for apartments, Airbnb properties, show houses, rental properties, and hospitality spaces designed to feel inviting, functional, and considered.",
  },

   {
    title: "Commercial Interiors",
    image: "/service7.jpg",
    description:
      "Coordinated support for property owners and developers, including project planning, contractor coordination, budgeting support, property improvement, and oversight from concept through execution.",
  },

  {
    title: "Interior Fit-Out ",
    image: "/service 2.png",
    description:
      "Refined finishes and carefully executed details that bring the design to life, including painting, wall finishes, gypsum, moulding, flooring, cabinetry, lighting, fixtures, and installation.",
  },

  {
    title: "Furnishing & Procurement",
    image: "/service3.jpg",
    description:
      "Curated sourcing of furniture, décor, lighting, fixtures, and materials, with careful coordination from approved selections through procurement, delivery, and installation.",
  },

  

  {
    title: "Design Consultation",
    image: "/service4.png",
    description:
      "Focused professional guidance for clients who need direction without a full-service project, including space assessment, layouts, furniture selection, finishes, colour, and design recommendations.",
  },

  
];

export default function Services() {
  return (
   <section
  id="services"
  className="
    bg-[#E9DDD2]
    min-h-[1300px]
    pb-32
    md:pb-40
    overflow-hidden
    scroll-mt-[88px]
    lg:scroll-mt-[70px]
  "
>

      
      {/* =====================================================
          EXPLORE OUR SERVICES
      ===================================================== */}

      <div
        className="
          max-w-[1100px]
          mx-auto
          px-6
          md:px-8
          lg:px-10
          mt-24
          md:mt-28
          lg:mt-32
          translate-y-[100px]
          translate-x-[80px]
        "
      >

        <div className="flex flex-col items-left 
gap-4 justify-center
 px-6 mb-10 md:mb-12 opacity-80 translate-y-[80px] lg:translate-y-[0px] 
 lg:translate-x-[-370px]">
  <h2
    className={`
      ${bodoni.className}
      text-[#3F3F3F]
      text-[2rem]
      md:text-[5rem]
      lg:text-[2.5rem]
      leading-[0.9]
      tracking-[-0.035em]
      font-normal
      text-center
    `}
  >
    Explore Our Services
  </h2>
  <div className="mt-7 w-[150px] h-[2px] bg-[#252525] lg:translate-x-[370px] opacity-80" />
        </div>


        {/* =================================================
            SERVICE GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-15
            gap-y-10
            lg:gap-y-20
            translate-y-[80px]
            
          "
        >

          {services.map((service) => (

            <div
              key={service.title}
              className="
                group
                w-full
                bg-[#F8F1EB]
                overflow-hidden
              "
            >

              {/* =================================================
                  SERVICE IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  aspect-[1.42/1]
                  overflow-hidden
                "
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />

              </div>


              {/* =================================================
                  SERVICE TEXT
              ================================================= */}

              <div
                className="
                  px-4
                  md:px-5
                  py-5
                  md:py-6
                "
              >

                <h3
                  className={`
                    ${bodoni.className}
                    text-[#4A3B32]
                    text-[1.45rem]
                    md:text-[1.55rem]
                    lg:text-[1.65rem]
                    leading-[1.15]
                    tracking-[-0.02em]
                    font-normal
                  `}
                >
                  {service.title}
                </h3>


                <p
                  className="
                    mt-4
                    text-[#596979]
                    text-[12px]
                    md:text-[13px]
                    leading-[1.65]
                    font-light
                    max-w-[330px]
                  "
                >
                  {service.description}
                </p>

              </div>

            </div>

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
          translate-y-[230px]
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