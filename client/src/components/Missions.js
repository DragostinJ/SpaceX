import React, { Fragment } from "react";
import MissionItem from "../components/MissionItem";

import gql from "graphql-tag";
import { Query } from "react-apollo";


const MISSIONS_QUERY = gql`
  query MissionsQuery {
    missions {
      mission_id
      mission_name
      wikipedia
    }
  }
`; ///////////// ADD MORE

class Missions extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Missions</h1>

        <Query query={MISSIONS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner

            if (error) console.log(error);

            return (
              <Fragment>
                {data.missions.map(mission => (
                  <MissionItem key={mission.mission_id} mission={mission} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
export default Missions;
