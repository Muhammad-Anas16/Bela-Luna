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
      <main className="">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
