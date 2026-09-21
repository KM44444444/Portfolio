import "./styles/Education.css";

const educationData = [
  {
    institution: "Meerut Institute of Engineering and Technology (MIET)",
    location: "Meerut, Uttar Pradesh",
    degree: "B.Tech — Computer Science & Engineering (Data Science)",
    detail: "CGPA: 7.0",
    description: "From 2024-2028 Pursuing Computer Science & Engineering with a focus on Data Science & a growing interest in Full-Stack Web Development. I enjoy turning ideas into practical applications while strengthening my skills in Java, JavaScript, databases, & core software development concepts. My journey also involves sharpening problem-solving & algorithmic thinking while exploring Cloud Computing, DevOps, & Artificial Intelligence to understand how modern technologies come together to create efficient & scalable solutions.",
    year: "2028",
  },
  {
    institution: "PM Shri Kendriya Vidyalaya, Punjab Lines, Meerut Cantt",
    location: "",
    degree: "Class 12 — PCM Student (Science Stream)",
    detail: "63%",
    description: "It was a chapter that built the foundation for the journey ahead. During my school years, I developed a strong interest in science & logical thinking, which later encouraged me to explore the world of tech & software development.",
    year: "2024",
  },
  {
    institution: "Kendriya Vidyalaya, Punjab Lines, Meerut Cantt",
    location: "",
    degree: "Class 10 — 2022",
    detail: "78%",
    description: "My school years helped me develop a strong academic foundation & a curious approach to learning. I enjoyed exploring science & mathematics while improving my reasoning & problem-solving abilities. These experiences shaped my interest in learning new things & prepared me for the academic journey that followed.",
    year: "2022",
  },
];

const certifications = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cybersecurity",
    date: "August 2025",
    image: "/images/cs.jpg",
  },
  {
    name: "Generative AI Workshop",
    issuer: "TechBlooms — IIT Roorkee",
    date: "August 2025",
    image: "/images/gen-ai.jpg",
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Leadership",
  "Adaptability",
  "Time Management",
];

const languages = [
  { name: "Hindi", short: "HI", level: "Native", color: "#FF6B35" },
  { name: "English", short: "EN", level: "Professional Working Proficiency", color: "#4ECDC4" },
];

const interests = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "Open Source",
  "Music Listening",
  "Kabbadi",
  "Drawing",
  "Cricket",
  "Anime",
  "Read Manga",
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>

        <div className="education-grid">
          <div className="education-column">
            <h3 className="section-subtitle">Education</h3>
            {educationData.map((edu, index) => (
              <div className="education-card" key={index}>
                <div className="education-card-header">
                  <h4>{edu.institution}</h4>
                  {edu.location && <h5>{edu.location}</h5>}
                </div>
                <p className="education-degree">{edu.degree}</p>
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
                <div className="education-meta">
                  <span className="education-detail">{edu.detail}</span>
                  <span className="education-year">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="education-column">
            <h3 className="section-subtitle">Soft Skills</h3>
            <div className="skills-tags-container">
              {softSkills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="section-subtitle" style={{ marginTop: "40px" }}>
              Languages
            </h3>
            <div className="languages-container">
              {languages.map((lang) => (
                <div className="language-item" key={lang.name}>
                  <div className="language-ball" style={{ background: lang.color }}>
                    <span className="language-symbol">{lang.short}</span>
                  </div>
                  <div className="language-info">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="section-subtitle" style={{ marginTop: "40px" }}>
              Interests
            </h3>
            <div className="skills-tags-container">
              {interests.map((interest) => (
                <span className="skill-tag interest-tag" key={interest}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="cert-section-title" id="certifications">
          Certifications
        </h3>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-flip-card" key={index}>
              <div className="cert-flip-inner">
                <div className="cert-flip-front education-card cert-card">
                  <div className="education-card-header">
                    <h4>{cert.name}</h4>
                  </div>
                  <div className="education-meta">
                    <span className="education-detail">{cert.issuer}</span>
                    <span className="education-year">{cert.date}</span>
                  </div>
                  {cert.image && <span className="flip-hint">Hover to view</span>}
                </div>
                {cert.image && (
                  <div className="cert-flip-back">
                    <img src={cert.image} alt={`${cert.name} Certificate`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
