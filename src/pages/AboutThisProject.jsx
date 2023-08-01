import reactLogo from "../assets/icons/react.svg";
import cssLogo from "../assets/icons/css.svg";
import bootstrapLogo from "../assets/icons/bootstrap.svg";

import "./AboutThisProject.css";

function AboutThisProject() {
  return (
    <div className="container text-white mt-3 mb-3" style={{ height: "100vh" }}>
      <h1 className="mb-4">About this project</h1>
      <p className="mb-4">
        The objective of this development was to put into practice some Frontend tools and skills
        such as:
      </p>
      <div className="skills">
        <p>
          {" "}
          <i className="bi bi-check-circle me-2 text-success"></i>API - The Movie Database
        </p>
        <p>
          <i className="bi bi-check-circle me-2 text-success"></i>Infinte Scroll
        </p>
        <p>
          <i className="bi bi-check-circle me-2 text-success"></i>Filters by Rating
        </p>
        <p>
          <i className="bi bi-check-circle me-2 text-success"></i>Searches
        </p>
      </div>
      <p>
        <i className="bi bi-check-circle me-2 text-success"></i>Applied technologies:
      </p>
      <div className="technologies-icons">
        <div className="technology-applied ">
          <img src={reactLogo} alt="react-logo" />
          <p>React</p>
        </div>

        <div className="technology-applied">
          <img src={cssLogo} alt="css-logo" />
          <p>CSS</p>
        </div>
        <div className="technology-applied">
          <img src={bootstrapLogo} alt="bootstrap-logo" />
          <p>React Bootstrap</p>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
