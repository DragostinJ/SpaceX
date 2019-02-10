import React, { Fragment } from "react";
import LaunchItem from "../components/LaunchItem";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import MissonKey from "./MissionKey";
import {Link} from 'react-router-dom'

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
        <MissonKey></MissonKey>
        <Link to="/rockets" className="btn btn-secondary my-3"> Rockets Detail</Link>
       
        <Link to="/missions" className="btn btn-secondary my-3 mx-3"> Missions Detail</Link>
        <Link to="/payloads" className="btn btn-secondary my-3 mx-3"> Payloads Detail</Link>
        
        
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ...</h4>; // TODO: add a spinner
          
            if (error) console.log(error);
            console.log(data);
            return (
                <Fragment>
                    {
                        data.launches.map(launch => (
                            <LaunchItem key={launch.flight_number} launch={launch} />
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
export default Launches;
