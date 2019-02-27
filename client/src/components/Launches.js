import React, { Fragment } from "react";
import LaunchItem from "../components/LaunchItem";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import MissonKey from "./MissionKey";
import { Link } from "react-router-dom";
import BarCharts from '../components/BarCharts'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissonKey />

     
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner

            if (error) console.log(error);

          
            let countFalse = 0;
            let countSuccess = 0;
            data.launches.map(e => {
              if (e.launch_success) {
                countSuccess++;
              } else  {countFalse++}
            });
            // console.log(`Failed ${countFalse} ` );
            // console.log(`Success ${countSuccess} ` );
            return (
              
              <Fragment>
                <BarCharts data={[countFalse, countSuccess]} size={[200,200]} />
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
export default Launches;
