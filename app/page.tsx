import Hero from "./components/hero/Hero";


import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Footer from "./components/sections/Footer";
import ShopPopup from "./components/sections/ShopPopup";


export default function Home() {
  return (
    <>
    <ShopPopup />
      <Hero />

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <Process />
      </section>

      

      <Footer />
    </>
  );
}