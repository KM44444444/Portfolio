import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Bachelor of Technology Computer Science & Engineering student
          from India with a strong passion for building modern and practical
          software solutions. I'm focused on Full Stack Web Development, working
          across responsive frontends, backend systems, APIs, and databases while
          strengthening my foundation in Java, JavaScript, and object-oriented
          programming.
        </p>
        <p className="para" style={{ marginTop: "20px" }}>
          I enjoy turning ideas into functional web applications, writing clean
          and maintainable code, and solving problems through logical and
          efficient approaches. Alongside development, I'm continuously exploring
          modern technologies, cloud computing and Artificial
          Intelligence to expand my skills and build solutions that create
          meaningful real-world impact.
        </p>
      </div>
    </div>
  );
};

export default About;
