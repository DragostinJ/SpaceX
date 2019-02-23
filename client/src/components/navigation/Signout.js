import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends React.Component {
  componentDidMount = () => {
    this.props.signout();
  };

  render() {
    return (
      <div>
        <span style={{ "font-size": "48px" }} className="badge badge-success">
          You have logged out successfully
        </span>{" "}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
