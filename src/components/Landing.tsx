import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
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
              <a href="#work" data-href="#work" className="cta-btn cta-primary" data-cursor="disable">
                View Projects
              </a>
              <a href="#contact" data-href="#contact" className="cta-btn cta-secondary" data-cursor="disable">
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
