import { useEffect, useRef } from "react";

import logo from "../assets/logo.png";
import heroBTN from "../assets/heroBTN.png";

const NAV_LINKS = ["Home", "Our Practice", "Dental Emergency", "Emergency", "FAQ"];

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null); 
  const linksRef = useRef([]);
  const btnRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

 
    gsap.set(
      [
        logoRef.current,
        ...linksRef.current,
        btnRef.current,
        arrowLeftRef.current,
        arrowRightRef.current,
      ],
      { autoAlpha: 0 }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logoRef.current,
      { autoAlpha: 0, x: -5 },
      { autoAlpha: 1, x: 0, duration: 0.6 }
    )

      .fromTo(
        linksRef.current,
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.3"
      )
  
      .fromTo(
        btnRef.current,
        { autoAlpha: 0, x: -5 },
        { autoAlpha: 1, x: 0, duration: 0.6 },
        "-=0.4"
      )
  
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="relative z-20 flex items-center justify-between px-6 md:px-12"
      >

        <a ref={logoRef} href="/" className="flex items-center gap-2 shrink-0" style={{ opacity: 0 }}>
          <img src={logo} alt="Penn Sharp Dental Surgeons" className="max-w-40 w-auto" />
        </a>


        <ul className="hidden md:flex items-center gap-8 text-[15px] text-[#1e2a3a] font-medium tracking-wide">
          {NAV_LINKS.map((item, i) => (
            <li key={item}>
              <a
                ref={(el) => (linksRef.current[i] = el)}
                href="#"
                className="relative font-primary hover:text-[#4ca3d8] transition-colors duration-200
                           after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px]
                           after:w-0 after:bg-[#4ca3d8] after:transition-all after:duration-300
                           hover:after:w-full"
                style={{ opacity: 0 }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div ref={btnRef} style={{ opacity: 0 }}>
          <button  className="border-surface/20  md:text-base font-medium text-sm border rounded-full py-2 px-6 bg-gradient-to-r from-[#93CDF5] via-[#e9f6ffc5] to-[#93CDF5] cursor-pointer transition-transform duration-200
                       hover:scale-[1.02] outline-none active:scale-[0.99] drop-shadow-sm">Book Appointment</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar