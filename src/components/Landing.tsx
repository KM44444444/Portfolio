import { PropsWithChildren, useCallback } from "react";
import { smoother } from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Landing.css";

gsap.registerPlugin(ScrollTrigger);

const Landing = ({ children }: PropsWithChildren) => {
  const scrollTo = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (!el) return;
    if (smoother && window.innerWidth > 1024) {
      smoother.paused(false);
      smoother.scrollTo(el, true, "top 150px");
    } else {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KSHITIZ
              <br />
              <span>MANDOLA</span>
            </h1>
            <div className="landing-cta-inline">
              <button className="cta-btn cta-primary" data-cursor="disable" onClick={() => scrollTo("work")}>
                View Projects
              </button>
              <button className="cta-btn cta-secondary" data-cursor="disable" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="landing-info">
            <h3>Full-Stack | Software</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
