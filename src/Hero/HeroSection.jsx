import heroBG from "../assets/heroBG.png";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import navArrowRight from "../assets/navArrowRight.png"
import navArrowLeft from "../assets/navArrowLeft.png"
import { useEffect, useRef } from "react";

function HeroSection() {
  const navBarRight = useRef(null);
  const navBarLeft = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    gsap.set([navBarRight.current,navBarLeft.current], { autoAlpha: 0 , autoAlpha: 1 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl
    .fromTo(
        navBarRight.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0 , duration: 0.5}
    )
    .fromTo(
        navBarLeft.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0 , duration: 0.5}
    )
  }, []);

  return (
    <section className="overflow-hidden relative w-full min-h-screen font-primary">
      <img
        src={heroBG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        draggable="false"
      />
      <Navbar />
      <img
        ref={navBarRight}
        className="hidden md:block absolute right-0 w-24 md:w-32"
        src={navArrowRight}
        alt="navArrowRight"
      />
      <img
        ref={navBarLeft}
        className="hidden md:block absolute left-0 w-24 md:w-32"
        src={navArrowLeft}
        alt="navArrowLeft"
      />
      <HeroContent />
    </section>
  );
}

export default HeroSection;
