import React from "react";

// import classNames from 'classnames'
// import Moment from 'react-moment'
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

          {/* later to be a LINK */}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //         <h2>Mission: <span className={"badge badge-" + (launch_success ? 'success' : 'danger')}>{mission_name}</span> </h2>

  //   </div>

  // )
  //     return (
  //         <div className="card" >
  //   <div className="card-body">
  //     <h5 className="card-title">{mission_name}</h5>

  //     <h2>Mission: <span className={"badge badge-" + (launch_success ? 'success' : 'danger')}>{mission_name}</span> </h2>
  //     <p className="card-text">{launch_date_local}</p>

  //   </div>
  // </div>
}
export default MissionItem;
