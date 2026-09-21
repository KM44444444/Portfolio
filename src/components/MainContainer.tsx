import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Achievements from "./Achievements";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

import Triangle from "./Triangle";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeHandler, 150);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <Triangle />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Education />
            <Achievements />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
