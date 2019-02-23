import React from "react";
import Header from "./navigation/Header";

import { Link } from "react-router-dom";

export default ({ children }) => {
  return (
    <div>
      {/* <Launches></Launches> */}
      <Header />
      <div>
        <ul>
          <Link to="/" className="btn btn-secondary">
            Home
          </Link>
          <Link to="/rockets" className="btn btn-danger">
            Rockets
          </Link>
          <Link to="/missions" className="btn btn-success">
            Missions
          </Link>
          <Link to="/launches" className="btn btn-success">
            Launches
          </Link>
          <Link to="/payloads" className="btn btn-success">
            Payloads
          </Link>
        </ul>
      </div>
      {children}
    </div>
  );
};
