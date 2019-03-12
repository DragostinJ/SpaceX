import React from "react";


import { Link } from "react-router-dom";

function PayloadItem({
  payload: {
    payload_id,
    reused,
    nationality,
    manufacturer,
    payload_type,
    payload_mass_kg,
    payload_mass_lbs
  }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Payload name: {payload_id}</h4>
          {/* <h2>Mission: <span className={"badge badge-" + (launch_success ? 'success' : 'danger')}>{mission_name}</span> </h2> */}
          {/* <p>Date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_local}</Moment></p> */}
        </div>
        <div className="col-md-3">
          <Link to={`/payloads/${payload_id}`} className="btn btn-secondary">
            Payload Detail:{" "}
          </Link>

          {/* later to be a LINK */}
        </div>
      </div>
    </div>
  );

}
export default PayloadItem;
