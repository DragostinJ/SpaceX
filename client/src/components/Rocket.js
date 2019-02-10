import React, { Component, Fragment } from "react";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import '../css/Rocket.css'

const ROCKET_QUERY = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(id: $rocket_id) {
      rocket_id
      rocket_name
      rocket_type
      stages
      country
      company
    }
  }
`;

export class Rocket extends Component {
  render() {
    let { rocket_id } = this.props.match.params;

    return (
      <div className="rocket-container">
        <Query query={ROCKET_QUERY} variables={{ rocket_id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.log(error);

            const {
              rocket_id,
              stages,
              company,
              rocket_name,
              country,
              rocket_type
            } = data.rocket;

            return (
              <div>
                <div>
                  <h3 className="display-4 my-3">
                    <span className="text-dark">Rocket Name: </span>
                    <span className="text-success">{rocket_name}</span>
                  </h3>
                  <h4 className="mb-4">Rocket Details:</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rocket Type: {rocket_type}
                    </li>
                    <li className="list-group-item">
                      Rocket Type: {rocket_id}
                    </li>
                    <li className="list-group-item">Number Stages: {stages}</li>
                    <li className="list-group-item">Country: {country}</li>
                    <li className="list-group-item">Company: {company}</li>
                  </ul>

                  <hr />
                  <Link to="/rockets" className="btn btn-secondary">
                    Back
                  </Link>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Rocket;
