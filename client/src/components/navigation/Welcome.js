import React from "react";
import '../../css/Welcome.css'
export default () => {
   
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-3">SpaceX Project</h1>
        <p className="lead">
          This is a simple project where I show my skills with different
          technologies.
        </p>
        <hr className="my-4" />
        <p className="tech-description">
          It is made with <span className="badge badge-primary">React.js</span>{" "}
          on GitPages ,{" "}
          <span className="badge badge-primary"> MongoDB</span> (serverless on
          Atlas), <span className="badge badge-primary">Node.js</span> with{" "}
          <span className="badge badge-primary">Express.js</span> and <span className="badge badge-primary">GraphQL</span> -
          deployed on <span className="badge badge-primary">Heroku</span>
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="https://en.wikipedia.org/wiki/SpaceX"
            role="button"
          >
            Learn more
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};
