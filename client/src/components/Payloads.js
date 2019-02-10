import React, { Fragment } from "react";


import gql from "graphql-tag";
import { Query } from "react-apollo";
import PayloadItem from './PayloadItem'

import {Link} from 'react-router-dom'

const PAYLOADS_QUERY = gql`
  query PayloadsQuery {
    payloads {
      payload_id
      reused
      nationality
      manufacturer
      payload_type
      payload_mass_kg
      payload_mass_lbs
      orbit_params {
        refere4nce_system
        regime
        longitude
        somi_major_axis_km
        periapsis_km
        apoapsis_km
      }
    }
  }
`;

class Payloads extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Payloads</h1>
       
        <Link to="/" className="btn btn-secondary my-3 mx-3"> Lounches Detail</Link>
        <Link to="/rockets" className="btn btn-secondary my-3"> Rockets Detail</Link>
       
     
        <Query query={PAYLOADS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner
          
            if (error) console.log(error);
            console.log(data);
            return (
                <Fragment>
                    {
                        data.payloads.map(payload => (
                            <PayloadItem key={payload.payload_id} payload={payload} />
                        ))
                    }
                </Fragment>
            )
          }}
        </Query>
      </Fragment>
    );
  }
}
export default Payloads;
