import { Link } from "react-router-dom";
import "./Greeting.scss";
const Greeting = () => {
  //función para redireccionar a los proyectos
  const goToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="Greeting" id="home">
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmR5ajdjYXF6ZHhrbTR3bDExYWQ5MmJpdTl0MHRjYms5ZHF0MmliNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1JSirM9CWto4poulJi/giphy.gif"
        alt="gretting-pocoyo"
      />
      <div className="greeting-content">
        <h2>
          Hi!
          <br /> I'm <span>Daniela Guzman</span>
        </h2>
        <p>
          Passionate web developer focused on crafting functional and inspiring
          digital experiences.
        </p>

        <button onClick={goToProjects} className="btn-primary">
          My projects
        </button>
      </div>
    </section>
  );
};

export default Greeting;
