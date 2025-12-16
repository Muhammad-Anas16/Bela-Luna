import "./App.css";
import AboutSection from "./component/About";
import FeaturesSection from "./component/features";
import GallerySection from "./component/gallery";
import HeroSection from "./component/hero";
import MenuSection from "./component/menu";
import Navbar from "./component/navbar";
import ReservationSection from "./component/reservation";
import TestimonialsSection from "./component/testimonial";

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
      </main>
    </>
  );
}

export default App;
