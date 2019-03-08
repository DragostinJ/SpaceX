import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Theme from '../navigation/theme/index'


class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/signout">
              Sign out
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feature">
              Feature
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
           
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
          </li>
          <hr />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <Link className="navbar-brand" to="/">
            SpaceX
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feature">
                  Features
                </Link>
              </li>

              {this.renderLinks()}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
            </ul>
            <Theme></Theme>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
                
            </form>
          </div>
        </nav>

        <hr />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header);
