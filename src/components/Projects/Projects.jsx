import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./projects.scss";

const Projects = () => {
  //se crea estado para cada proyecto
  const [index, setCurrentIndex] = useState(0);
  const goToNext = () => {
    // con el operador modulo % evitamos que el carrusel se rompa
    setCurrentIndex((currentValue) => (currentValue + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (currentValue) => (currentValue - 1 + projects.length) % projects.length,
    );
  };

  return (
    <div id="projects" className="carousel">
      <div className="carousel-track">
        <button className="arrow left" onClick={goToPrevious}>
          ❮
        </button>

        <div className="cards-wrapper">
          {projects.map((project, i) => {
            let position = "next";

            if (i === index) position = "active";
            else if (i === (index - 1 + projects.length) % projects.length)
              position = "prev";

            return (
              <div key={i} className={`card-container ${position}`}>
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={goToNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Projects;
