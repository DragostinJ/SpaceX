import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

import Launches from "./components/Launches";
import Launch from "../src/components/Launch";
import Rocket from "../src/components/Rocket";
import Missions from "../src/components/Missions";
import Mission from "../src/components/Mission";
import Payloads from "../src/components/Payloads";
import Payload from "../src/components/Payload";
import Rockets from "../src/components/Rockets";
import RocketMarket from "../src/components/RocketMarket";

import Feature from "../src/components/Feature";

import Welcome from "../src/components/navigation/Welcome";
import Signup from "../src/components/navigation/Signup";
import Signout from "../src/components/navigation/Signout";
import Signin from "../src/components/navigation/Signin";

import App from "./components/App";

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(reduxThunk)
);
const client = new ApolloClient({
  uri: "https://young-garden-82503.herokuapp.com/graphql"
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App>
          <div className="container">
            <Route exact path={process.env.PUBLIC_URL +  "/" }component={Welcome} />
            <Route exact path={process.env.PUBLIC_URL +  "/signup" }component={Signup} />
            <Route exact path={process.env.PUBLIC_URL +  "/signin"} component={Signin} />
            <Route exact path={process.env.PUBLIC_URL +  "/signout" }component={Signout} />
            <Route exact path={process.env.PUBLIC_URL +  "/launches" }component={Launches} />
            <Route exact path={process.env.PUBLIC_URL +  "/launch/:flight_number" }component={Launch} />
            <Route exact path={process.env.PUBLIC_URL +  "/rocket/:rocket_id"} component={Rocket} />
            <Route exact path={process.env.PUBLIC_URL +  "/rockets"} component={Rockets} />
            <Route exact path={process.env.PUBLIC_URL +  "/missions"} component={Missions} />
            <Route exact path={process.env.PUBLIC_URL +  "/missions/:mission_id" }component={Mission} />
            <Route exact path={process.env.PUBLIC_URL +  "/payloads" }component={Payloads} />
            <Route exact path={process.env.PUBLIC_URL +  "/payloads/:payload_id" }component={Payload} />
            {/* <Route exact path="/feature" component={Feature} /> */}
            <Route exact path={process.env.PUBLIC_URL +  "/feature"} component={RocketMarket} />
           {/* <Route path={process.env.PUBLIC_URL + '/'}></Route> */}
          </div>
        </App>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
