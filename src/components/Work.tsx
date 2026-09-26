import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "DriveUK",
    category: "Travel & Vehicle Booking Platform",
    tools: "React Native, REST APIs",
    description:
      "Built a long-distance travel booking application for routes between Delhi and Uttarakhand with separate driver and passenger workflows.",
    features: [
      "OTP-based authentication",
      "Driver registration",
      "Passenger workflow",
      "Profile management",
      "Role-based onboarding",
      "End-to-end booking functionality",
    ],
  },
  {
    name: "TalentDash",
    category: "Talent Intelligence Dashboard",
    tools: "React, TypeScript, Vite, Node.js, Express, PostgreSQL, Drizzle ORM",
    description:
      "Built a full-stack talent intelligence dashboard with a React and TypeScript frontend and a Node.js/Express backend.",
    features: [
      "React + TypeScript frontend",
      "Node.js/Express backend",
      "PostgreSQL database",
      "Drizzle ORM",
      "Type-safe data access layer",
      "REST APIs",
    ],
  },
  {
    name: "Green & Clean",
    category: "Smart Waste Management",
    tools:
      "React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Query, Node.js, Express, Google Cloud Vision API",
    description:
      "Built for Smart India Hackathon 2026, Green & Clean lets citizens report garbage spots with geo-tagged photos, alerts municipal workers for cleanup, and rewards contributions through a redeemable Green Wallet.",
    features: [
      "Geo-tagged waste reports",
      "Municipal worker alerts",
      "Redeemable Green Wallet points",
      "Citizen, worker, and admin dashboards",
      "Cleanup analytics and gamification",
    ],
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement?.getBoundingClientRect().width ?? 0;
      const padding: number =
        parseFloat(window.getComputedStyle(box[0]).paddingLeft) || 0;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Technologies</h4>
                <p>{project.tools}</p>
                <p className="work-description">{project.description}</p>
                <div className="work-features">
                  {project.features.map((feature) => (
                    <span className="work-feature-tag" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="work-placeholder">
                <div className="work-placeholder-inner">
                  <span className="work-placeholder-number">0{index + 1}</span>
                  <span className="work-placeholder-name">{project.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
