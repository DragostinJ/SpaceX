import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link className="btn btn-secondary px-4 mx-4" to="/signout">
            Sign Out
          </Link>
          <Link className="btn btn-secondary px-4 mx-4" to="/feature">
            Feature{" "}
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="btn btn-secondary px-4 mx-4" to="/signin">
            Sign In
          </Link>
          <Link className="btn btn-secondary px-4 mx-4" to="/signup">
            Sign Up
          </Link>
          <hr/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Link className="btn btn-secondary px-4 mx-4" to="/">Home</Link>
        {this.renderLinks()}
        <hr/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header);
