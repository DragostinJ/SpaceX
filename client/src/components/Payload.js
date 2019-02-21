import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Link } from "react-router-dom";

const PAYLOAD_QUERY = gql`
  query PayloadQuery($payload_id: String!) {
    payload(payload_id: $payload_id) {
      reused
      payload_id
      customers
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

export class Payload extends React.Component {
  render() {
    let { payload_id } = this.props.match.params;

    return (
      <div className="container">
        <Query query={PAYLOAD_QUERY} variables={{ payload_id }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) console.log(error);

            const {
              reused,
              payload_id,

              customers,
              nationality,
              manufacturer,
              payload_type,
              payload_mass_kg,
              payload_mass_lbs,
              // orbit_params: {
              //   refere4nce_system,
              //   regime,
              //   longitude,
              //   somi_major_axis_km,
              //   periapsis_km,
              //   apoapsis_km
              // }
            } = data.payload;

            console.log(data.payload);

            return (
              <div>
                <ul className="list-group">
                  <li className="list-group-item ">Payload :{payload_id}</li>
                  <li className="list-group-item">Reused: {reused}</li>
                  <li className="list-group-item">Customers: {customers}</li>
                  <li className="list-group-item">Nationality: {nationality}</li>
                  <li className="list-group-item">Manufacturer: {manufacturer}</li>
                  <li className="list-group-item">Payload Type: {payload_type}</li>
                  <li className="list-group-item">Payload in kg: {payload_mass_kg}</li>
                  <li className="list-group-item">Payload in lbs: {payload_mass_lbs}</li>
                
                
                </ul>
              {/* build orbit details popup  */}
                
                <hr />
                <Link to="/payloads" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default Payload;
