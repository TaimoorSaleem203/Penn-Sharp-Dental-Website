import { useEffect, useRef } from "react";

import heroCircle from "../assets/heroCircle.png";
import heroTeeth from "../assets/heroTeeth.png";
import heroTeethArrow from "../assets/heroTeethArrow.png";

function HeroContent() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descRef = useRef(null);
  const circleRef = useRef(null);
  const teethRef = useRef(null);
  const teethArrowRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    gsap.set(
      [
        headingRef.current,
        subheadingRef.current,
        descRef.current,
        circleRef.current,
        teethRef.current,
      ],
      { autoAlpha: 0 }
    );

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.6, 
    });

    tl
      .fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.65 }
      )

      .fromTo(
        subheadingRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.65 },
        "-=0.4"
      )

      .fromTo(
        descRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )

      .fromTo(
        circleRef.current,
        { autoAlpha: 0, scale: 0.75 },
        { autoAlpha: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
        "-=0.2"
      )

      .fromTo(
        teethRef.current,
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.35"
      )

      .fromTo(
        teethArrowRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 0.85, duration: 0.5 },
        "-=0.2"
      );
  }, []);

  return (
    <div className="relative font-primary z-10 flex flex-col items-center text-center pt-8 pb-0 px-4">

      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1e2a3a] leading-tight"
      >
        Achieve A <span className="font-semibold">Brighter,</span>
      </h1>

      <h2
        ref={subheadingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-medium italic text-[#4ca3d8] leading-tight md:mt-2"
      >
        Healthier <span className="font-semibold">Smile!</span>
      </h2>

      <p
        ref={descRef}
        className="mt-6 text-[14px] font-medium md:text-base text-[#4a5a6a] max-w-sm leading-relaxed"
        style={{ opacity: 0 }}
      >
        Advanced, patient-focused dental care
        <br />
        designed for long-lasting results
      </p>


        <img
          ref={circleRef}
          src={heroCircle}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[-400px] xl:-bottom-[300px] left-1/2 -translate-x-1/2 w-96 pointer-events-none select-none"
          style={{ opacity: 0 }}
          draggable="false"
        />
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
        <img
          ref={teethArrowRef}
          src={heroTeethArrow}
          alt=""
          aria-hidden="true"
          className="absolute bottom-44 md:bottom-48 left-1/2 -translate-x-1/2 w-72 md:w-96 pointer-events-none select-none"
          style={{ opacity: 0 }}
          draggable="false"
        />
        <img
          ref={teethRef}
          src={heroTeeth}
          alt="Healthy tooth illustration"
          className="z-10 w-60 md:w-72 pointer-events-none select-none drop-shadow-xl"
          style={{ opacity: 0 }}
          draggable="false"
        />
      </div>
    </div>
  );
}

export default HeroContent