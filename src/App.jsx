import "./App.css";
import AboutSection from "./component/aboutSection";
import FeaturesSection from "./component/featuresSection";
import FooterSection from "./component/footerSection";
import GallerySection from "./component/gallerySection";
import HeroSection from "./component/heroSection";
import MenuSection from "./component/menuSection";
import Navbar from "./component/navbar";
import ReservationSection from "./component/reservationSection";
import TestimonialsSection from "./component/testimonialSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <FeaturesSection />

        <section id="menu">
          <MenuSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <TestimonialsSection />

        <section id="reservation">
          <ReservationSection />
        </section>

        <section id="footer">
          <FooterSection />
        </section>
      </main>
    </>
  );
}

export default App;
