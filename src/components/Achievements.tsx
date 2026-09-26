import "./styles/Achievements.css";
import { SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

const achievements = [
  {
    title: "INTRUSION X 8.0",
    subtitle: "Certificate of Participation",
    venue: "GLA University, Mathura, India — Cyberonites",
    date: "2025",
    image: "/images/intrusion-x.jpg",
  },
  {
    title: "GREEN Olympiad 2019",
    subtitle: "Certificate of Participation",
    venue: "TERI, New Delhi",
    date: "2019-2020",
    image: "/images/green-olympiad.jpg",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span>
          <br /> Hackathons
        </h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card-flip" key={index}>
              <div className="achievement-card-inner">
                <div className="achievement-card-front">
                  <div className="achievement-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>{item.title}</h4>
                    <p className="achievement-subtitle">{item.subtitle}</p>
                    <div className="achievement-meta">
                      <span>{item.venue}</span>
                      {item.date && <span>{item.date}</span>}
                    </div>
                  </div>
                  {item.image && <span className="flip-hint">Click to view</span>}
                </div>
                {item.image && (
                  <div className="achievement-card-back">
                    <img src={item.image} alt={`${item.title} Certificate`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="stats-heading" id="coding-profiles">Coding Profiles</h3>
        <div className="stats-row">
          <div className="stats-column">
            <h3 className="leetcode-title">Coding Platforms</h3>
            <a
              href="https://leetcode.com/u/KM44444444/"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-card"
              data-cursor="disable"
            >
              <div className="leetcode-card-content">
                <div className="leetcode-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.631-.892l4.092 1.018a1.374 1.374 0 0 0 1.646-.938V1.374A1.374 1.374 0 0 0 19.155 0h-5.672zM7.399 15.177a3.26 3.26 0 0 1-2.358.976 3.26 3.26 0 0 1-2.358-.976L.69 12.581a.502.502 0 0 1 0-.708l2.632-2.633a3.26 3.26 0 0 1 2.358-.976 3.26 3.26 0 0 1 2.358.976l2.632 2.633a.502.502 0 0 1 0 .708l-2.631 2.634z" />
                  </svg>
                </div>
                <div className="leetcode-info">
                  <h4>LeetCode Profile</h4>
                  <p>Solve problems, improve skills, and track progress</p>
                  <span className="leetcode-username">KM44444444</span>
                </div>
                <div className="leetcode-arrow">→</div>
              </div>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/hemlatalwl5?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-card"
              data-cursor="disable"
            >
              <div className="leetcode-card-content">
                <div className="leetcode-icon">
                  <SiGeeksforgeeks size={32} aria-hidden="true" />
                </div>
                <div className="leetcode-info">
                  <h4>GeeksforGeeks Profile</h4>
                  <p>Explore practice activity and problem-solving progress</p>
                  <span className="leetcode-username">hemlatalwl5</span>
                </div>
                <div className="leetcode-arrow" aria-hidden="true">→</div>
              </div>
            </a>
          </div>

          <div className="stats-column">
            <h3 className="leetcode-title">GitHub Activity</h3>
            <div className="github-graph-container">
              <img
                src="https://ghchart.rshah.org/KM44444444"
                alt="GitHub Contribution Graph"
                className="github-graph"
              />
            </div>
            <a
              href="https://www.hackerrank.com/profile/hemlatatiz32"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-card"
              data-cursor="disable"
            >
              <div className="leetcode-card-content">
                <div className="leetcode-icon">
                  <SiHackerrank size={32} aria-hidden="true" />
                </div>
                <div className="leetcode-info">
                  <h4>HackerRank Profile</h4>
                  <p>View skills, certifications, and coding challenges</p>
                  <span className="leetcode-username">hemlatatiz32</span>
                </div>
                <div className="leetcode-arrow" aria-hidden="true">→</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
