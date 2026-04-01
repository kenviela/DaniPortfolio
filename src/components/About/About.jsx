import "./About.scss";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import { SiJavascript, SiSass, SiMysql, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I'm Daniela Guzman, a Systems Engineer focused on web development. I
          enjoy building clean and functional interfaces, combining design and
          technology to create meaningful user experiences.
        </p>

        {/* 🔥 Skills con íconos */}
        <div className="skills">
          <span className="react">
            <FaReact /> React
          </span>

          <span className="node">
            <FaNodeJs /> Node.js
          </span>

          <span className="js">
            <SiJavascript /> JavaScript
          </span>

          <span className="scss">
            <SiSass /> SCSS
          </span>

          <span className="mysql">
            <SiMysql /> MySQL
          </span>

          <span className="mongo">
            <SiMongodb /> MongoDB
          </span>

          <span className="git">
            <FaGitAlt /> Git
          </span>

          <span className="github">
            <FaGithub /> GitHub
          </span>
        </div>
        <div className="about-links">
          <a href="https://github.com/kenviela" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniela-guzman-avila-96a377251"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:daniela.guzman.a2511@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
};

export default About;
