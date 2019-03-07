import React from "react";
import gql from "graphql-tag";

import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { Col } from "react-bootstrap";

const ROCKET_ITEM = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(id: $rocket_id) {
      rocket_id
      active
      boosters
      cost_per_launch
      success_rate_pct
      first_flight
      rocket_name
      rocket_type
      stages
      country
      height {
        meters
        feet
      }
      company
      engines {
        version
        type
        layout
        engine_loss_maxmber
        propellant_1
        propellant_2
      }
    }
  }
`;
export class RocketMarket extends React.Component {
  render() {
    let { rocket_id } = this.props.match.params;

    return (
      <Col xl="4" md="4">
        <Query query={ROCKET_ITEM} variables={{ rocket_id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.log(error);

            const {
              rocket_id,
              active,
              boosters,
              cost_per_launch,
              success_rate_pct,
              first_flight,
              rocket_name,
              rocket_type,
              stages,
              company,
              country,
              height: { meters, feet },
              engines: {
                version,
                layout,
                type,
                engine_loss_maxmber,
                propellant_1,
                propellant_2
              }
            } = data.rocket;
            return (
              <Col>
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Primary card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </Col>
            );
          }}
        </Query>
      </Col>
    );
  }
}
export default RocketMarket;
