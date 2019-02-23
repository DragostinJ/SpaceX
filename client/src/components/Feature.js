import React from "react";
import requireAuth from "./navigation/requireAuth";

class Feature extends React.Component {
  render() {
    return (
      <div>
        <div className="alert alert-dismissible alert-danger">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <h4 className="alert-heading">Warning!</h4>
          <p className="mb-0"> Black market for ROCKETS</p>
        </div>
        <div
          className="card text-white bg-primary mb-3"
          style={{ "max-width": "20rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        
        Rockets Black Market
      </div>
    );
  }
}

export default requireAuth(Feature);
