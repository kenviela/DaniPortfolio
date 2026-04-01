import { Link } from "react-router-dom";
import "./ProjectCard.scss";
const ProjectCard = ({ title, category, image, link }) => {
  return (
    <Link to={link} className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3> <p>{category}</p>
      </div>
    </Link>
  );
};
export default ProjectCard;
