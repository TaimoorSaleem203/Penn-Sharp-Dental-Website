import heroBG from "../assets/heroBG.png";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import heroGraph from "../assets/heroGraph.png"

function HeroSection() {
  return (
    <section className="overflow-hidden relative w-full min-h-screen font-primary">

      <img
        src={heroBG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable="false"
      />

      <img src={heroGraph} className="invert hover:invert-0 transition-all duration-150 ease-in-out absolute inset-0 -z-1 opacity-5 w-full h-full object-cover" alt="" />
      
      <Navbar />

      <HeroContent />
    </section>
  );
}

export default HeroSection