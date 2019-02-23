import React from "react";

import { Link } from "react-router-dom";

import falcon1 from "../images/falcon1.jpg";
import falcon9 from "../images/falcon9.jpg";
import falconHeavy from "../images/falconHeavy.jpg";
import falconBig from "../images/bigFrocket.jpg";

const style = {
  height: "200px",
  width: "100%",
  display: "block"
};

function RocketItem2({
  rocket: {
    height: { meters, feet },
    rocket_id,
    rocket_name,
    rocket_type,
    success_rate_pct,
    first_flight,
    cost_per_launch,
    country
  }
}) {
  let img;

  if (rocket_id === "falcon1") {
    img = falcon1;
  } else if (rocket_id === "falcon9") {
    img = falcon9;
  } else if (rocket_id === "falconheavy") {
    img = falconHeavy;
  } else {
    img = falconBig;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  let cost = formatter.format(cost_per_launch);

  return (
    
     
        <div className="card border-primary mb-3" style={{ maxWidth: "35rem" }}>
          {/* <div className="card text-white bg-dark mb-3"> */}
          <h3 className="card-header">{rocket_name}</h3>
          <div className="card-body">
            <h5 className="card-title">
              Cost per launch:{" "}
              <span className="badge badge-success">{cost}</span>
            </h5>
            <h5 className="card-title">
              {" "}
              Meters: <span className="badge badge-success">{meters}</span>{" "}
              Feet: <span className="badge badge-success">{feet}</span>
            </h5>
            <img style={style} src={img} alt="Rocket" />
            <h4 className="card-title">{rocket_id}</h4>
            <p className="card-text">
              First flignt on:{" "}
              <span className="badge badge-secondary">{first_flight}</span>
            </p>
            {/* "text-" + (success_rate_pct=>"50" ? "success" : "danger") */}
            <p className="card-text">
              Success Rate:{" "}
              <span
                className={
                  "badge badge-" +
                  (success_rate_pct >= "50" ? "success" : "danger")
                }
              >
                {success_rate_pct}
              </span>
            </p>
          </div>

          {/* /////// */}
          <div className="row mx-2">
            <div className="col-md-9">
              <h4>
                Country:{" "}
                <span className="badge badge-secondary">{country}</span>
              </h4>
            </div>
            <div className="col-md-3">
              <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">
                Rocket Detail:{" "}
              </Link>

              {/* later to be a LINK */}
            </div>
          </div>
        </div>
     
    
  );
}
export default RocketItem2;
