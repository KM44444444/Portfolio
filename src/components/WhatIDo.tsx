import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "Languages",
    tags: ["Java", "Python"],
  },
  {
    title: "Frontend",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    tags: ["SQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    tags: ["Git", "GitHub", "Docker", "Vercel", "Render"],
  },
  {
    title: "AI & Data",
    tags: ["AI/ML Integration", "Pandas"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const handlers: (() => void)[] = [];
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          handlers.push(() => container.removeEventListener("click", handler));
        }
      });
    }
    return () => {
      handlers.forEach((fn) => fn());
    };
  }, []);
  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          <div>MY</div>
          <div>
            T<span className="hat-h2">ECH</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in skills-grid">
          {skillCategories.map((category, index) => (
            <div
              className="what-content what-noTouch"
              key={category.title}
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{category.title}</h3>
                <div className="what-content-flex">
                  {category.tags.map((tag) => (
                    <div className="what-tags" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
