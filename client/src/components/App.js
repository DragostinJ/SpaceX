import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "../components/Launches";
import Launch from "../components/Launch";
import Rocket from '../components/Rocket'
import Missions from '../components/Missions'
import Mission from '../components/Mission'
import Payloads from '../components/Payloads'
import Payload from '../components/Payload'

import Rockets from '../components/Rockets'
import { BrowserRouter, Route } from "react-router-dom";

import "../css/App.css";
import logo from "../logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: "block", margin: "auto" }}
            />

            <Route exact path="/" component={Launches} />
            <Route exact path="/rocket/:rocket_id" component={Rocket} />
            <Route exact path="/launch/:flight_number" component={Launch} />
            <Route exact path="/missions/:mission_id" component={Mission} />
            <Route exact path="/rockets" component={Rockets} />
            <Route exact path="/missions" component={Missions} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/payloads" component={Payloads} />
            <Route exact path="/payloads/:payload_id" component={Payload} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
