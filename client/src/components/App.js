import React from "react";
import Header from "./navigation/Header";

import { Link } from "react-router-dom";

export default ({ children }) => {
  return (
    <div>
      {/* <Launches></Launches> */}
      <Header />
      <div className="container">
        <ul>
          <Link to="/" className="btn btn-secondary">
            Home
          </Link>
          <Link to="/rockets" className="btn btn-danger">
            Rockets
          </Link>
          <Link to="/missions" className="btn btn-secondary">
            Missions
          </Link>
          <Link to="/launches" className="btn btn-secondary">
            Launches
          </Link>
          <Link to="/payloads" className="btn btn-secondary">
            Payloads
          </Link>
        </ul>
      </div>
      {children}
    </div>
  );
};
