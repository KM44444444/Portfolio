import "./styles/Career.css";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Digi9Web Pvt. Ltd.",
    location: "Remote",
    period: "Aug 2026 – Feb 2027",
    description:
      "Develop and maintain web and mobile application features using modern software development practices. Write clean, efficient and well-documented code. Debug software issues and contribute to application performance improvements. Participate in code reviews and team meetings. Collaborate with designers, developers and project managers.",
  },
  {
    role: "AI Engineer Intern",
    company: "The AI Signal",
    location: "Work From Home",
    period: "May 2026 – Aug 2026",
    description:
      "Contribute to AI engineering projects and technical workflows. Apply software development and AI/LLM integration skills to project work. Work with AI-powered application development workflows.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>
                    {exp.company} — {exp.location}
                  </h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
