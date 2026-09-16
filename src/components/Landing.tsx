import { PropsWithChildren, useCallback } from "react";
import { smoother } from "./Navbar";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const scrollTo = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (!el) return;
    if (smoother && window.innerWidth > 1024) {
      smoother.paused(false);
      smoother.scrollTo(`#${section}`, true, "top 150px");
    } else {
      el.scrollIntoView({ behavior: "smooth" });
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
              <a href="#work" className="cta-btn cta-primary" data-cursor="disable" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>
                View Projects
              </a>
              <a href="#contact" className="cta-btn cta-secondary" data-cursor="disable" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                Contact Me
              </a>
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
