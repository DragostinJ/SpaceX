import React, { Fragment } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import RocketItem2 from "./RocketItem2";
import requireAuth from "./navigation/requireAuth";
import { Container, Row, Col } from "react-bootstrap";

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      country
      rocket_name
      rocket_type
      success_rate_pct
      cost_per_launch
      first_flight
      height {
        meters
        feet
      }
    }
  }
`;

class RocketMarket extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="alert alert-dismissible alert-danger">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <h4 className="alert-heading">Warning!</h4>
          <p className="mb-0"> Black market for ROCKETS</p>
        </div>
        <Query query={ROCKETS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner

            if (error) console.log(error);

            return (
              <Container>
                <Row>
                  {data.rockets.map(rocket => (
                    <RocketItem2 key={rocket.rocket_id} rocket={rocket} />
                  ))}
                </Row>
              </Container>
            );
          }}
        </Query>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </Fragment>
    );
  }
}

export default requireAuth(RocketMarket);
