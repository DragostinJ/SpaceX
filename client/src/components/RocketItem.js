import React from "react";

import {Link} from 'react-router-dom'


function RocketItem({
  rocket: {
      rocket_id,
      rocket_name,
      rocket_type
   
  }
}) {
  return (
    <div className="card card-body mb-3">
      
      <div className="row">
        <div className="col-md-9">
        <h4>
            Rocket: {' '}
          
            {rocket_name}
           
        </h4>
        {/* <h2>Mission: <span className={"badge badge-" + (launch_success ? 'success' : 'danger')}>{mission_name}</span> </h2> */}
          {/* <p>Date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_local}</Moment></p> */}
        </div>
        <div className="col-md-3" >
        
            <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">Rocket Detail: </Link> 
         
            {/* later to be a LINK */}
        </div>
      </div>
    </div>
  );

 
}
export default RocketItem;
