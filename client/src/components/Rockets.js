import React, { Fragment } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import RocketItem from "./RocketItem";
import { Link } from "react-router-dom";

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      rocket_name
      rocket_type
    }
  }
`;

class Rockets extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Rockets</h1>

        <Query query={ROCKETS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner

            if (error) console.log(error);

            return (
              <Fragment>
                {data.rockets.map(rocket => (
                  <RocketItem key={rocket.rocket_id} rocket={rocket} />
                ))}
              </Fragment>
            );
          }}
        </Query>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </Fragment>
    );
  }
}
export default Rockets;
