import React, { Component } from "react";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { Link } from "react-router-dom";


import "../css/Rocket.css";

const ROCKET_QUERY = gql`
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

export class Rocket extends Component {
  state = {
    isHidden: true
  };
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  
  
  render() {
    let { rocket_id } = this.props.match.params;

    // const PopupExample =  () => (
    //   <Popup trigger={<button> Trigger</button>} position="right center">
    //     <div>Popup content here !!</div>
    //   </Popup>
    // )

    return (
      <div className="rocket-container">
        <Query query={ROCKET_QUERY} variables={{ rocket_id }}>
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
              <div>
                <div>
                  <h3 className="display-4 my-3">
                    <span className="text-dark">Rocket Name: </span>
                    <span className="text-success">{rocket_name}</span>
                  </h3>
                  <div>
                    {/* <button onClick={this.toggleHidden.bind(this)}>
                     
                    </button> */}
                    
                  </div>
                  <h4 className="mb-4">Rocket Details:</h4>
                  <ul className="list-group">
                    <li className="wi2d list-group-item">
                      Rocket Type: {rocket_type}
                    </li>
                    <li className="list-group-item">
                      Rocket Type: {rocket_id}
                    </li>
                    <li className="list-group-item">Number Stages: {layout}</li>
                    <li className="list-group-item">Boosters: {boosters}</li>
                    <li className="list-group-item">
                      Cost per launch: {cost_per_launch}
                    </li>

                    <li  className="list-group-item">
                      Success Rate: {success_rate_pct}
                    </li>
                    <li className="list-group-item">
                      First Flight: {first_flight}
                    </li>
                    <li className="list-group-item">Company: {company}</li>
                    
                    <li className="list-group-item">Company: {company}</li>
                    {!this.state.isHidden && (
                     <div className="container1">
                       
                       {/* <ul className="pop-up-wrap"> */}
                         
                         <li className="li-pop-up"><span className="span-li">Version:</span> {version}</li>
                         <li className="li-pop-up"><span className="span-li">Layout:</span> {layout}</li>
                         <li className="li-pop-up"><span className="span-li">Type: </span>{type}</li>
                         <li className="li-pop-up"><span className="span-li">Engine Loss Maxmber:</span> {engine_loss_maxmber}</li>
                         <li className="li-pop-up"><span className="span-li">Propellant_1:</span> {propellant_1}</li>
                         <li className="li-pop-up"><span className="span-li">Propellant 2:</span> {propellant_2}</li>
                       {/* </ul> */}
                     </div>
                  
                   )}
                    
                    <li  onClick={this.toggleHidden.bind(this)} className="list-group-item">Engine:</li>
                    
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
