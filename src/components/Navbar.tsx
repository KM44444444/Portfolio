import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[data-href]") as HTMLAnchorElement;
      if (link && window.innerWidth > 1024) {
        e.preventDefault();
        const section = link.getAttribute("data-href");
        if (section) {
          smoother.paused(false);
          smoother.scrollTo(section, true, "top 150px");
        }
      }
    };
    document.addEventListener("click", handleLinkClick, true);

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="navbar-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            <img src="/images/dp.jpg" alt="Kshitiz" className="navbar-dp" />
            KM
          </a>
        </div>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#education" href="#education">
              <HoverLinks text="EDUCATION" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#achievements" href="#achievements">
              <HoverLinks text="ACHIEVEMENTS" />
            </a>
          </li>
          <li>
            <a data-href="#coding-profiles" href="#coding-profiles">
              <HoverLinks text="CODING" />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
