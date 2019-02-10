import React, { Component, Fragment } from "react";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const MISSION_QUERY = gql`
  query MissionQuery($mission_id: String!) {
    mission(mission_id: $mission_id) {
      mission_id
      mission_name
      wikipedia
      website
      twitter
      description
      payload_ids
    }
  }
`;
export class Mission extends Component {
  render() {
    let { mission_id } = this.props.match.params;
    //     const {payloads_id} = this.props.match.params
    // const listItems = payloads_id.map((number) =>
    //   <li>{number}</li>
    // );

    return (
      <Fragment>
        <Query query={MISSION_QUERY} variables={{ mission_id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              mission_id,
              mission_name,
              wikipedia,
              website,
              twitter,
              description,
              payload_ids
            } = data.mission;

            
            const payloadList = payload_ids;
            const listItem = payloadList.map(payload => (
              <Link to={`/payloads/${payload}`}>
                <span
                  key={payload}
                  style={{ padding: "4px", margin: "2px" }}
                  className="badge badge-pill badge-active"
                >
                  {payload}
                </span>
              </Link>
            ));

            return (
              <div>
                <h1 className="display-4 my-3">
                  <div className="border container  ">
                    <span className="text-dark my-1 mission-header">
                      Mission:{" "}
                    </span>
                    <span className="text-danger">{mission_name}</span>
                  </div>
                </h1>
                <h4 className="mb-4">Launch Details:</h4>
                <ul className="list-group">
                  <li className="list-group-item">Mission ID: {mission_id}</li>

                  <li className="list-group-item">
                    WebSite:{" "}
                    <span className="text-primary">
                      <a href={website}>{website}</a>
                    </span>
                  </li>
                  <li className="list-group-item">
                    Description:
                    <span className="text-success"> {description}</span>
                  </li>
                  <li className="list-group-item">
                    WikiPage <i className="fa fa-book fa-fw" />{" "}
                    <a href="https://en.wikipedia.org/wiki/Telesat">
                      <span className="text-primary">
                        {wikipedia || "no wikipedia"}
                      </span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    Twitter <i className="fa fa-twitter" />
                    <a href={twitter}>
                      <span className="text-primary">
                        {twitter || "no twitter"}
                      </span>
                    </a>
                  </li>
                  <li className="list-group-item">Payloads: 
                    <div className="container">{listItem}</div>
                  </li>
                </ul>
                <hr />
                <Link to="/missions" className="btn btn-secondary">
                  Missions
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Mission;
