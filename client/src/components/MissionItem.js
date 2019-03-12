import React from "react";

import { Link } from "react-router-dom";

function MissionItem({
  mission: {
    wikipedia,
    mission_name,
    website,
    description,
    payload_ids,
    mission_id,
    twitter
  }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission Name: {mission_name}</h4>
          {/* <h2>Mission: <span className={"badge badge-" + (launch_success ? 'success' : 'danger')}>{mission_name}</span> </h2> */}
          {/* <p>Date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_local}</Moment></p> */}
        </div>
        <div className="col-md-3">
          <Link to={`/missions/${mission_id}`} className="btn btn-secondary">
            Mission Detail:{" "}
          </Link>

        </div>
      </div>
    </div>
  );

}
export default MissionItem;
