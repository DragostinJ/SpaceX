import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signin extends React.Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    })
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" id="firstname" component="input" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
    
  }
}
function mapStateToProps(state) {
  return {errorMessage: state.auth.errorMessage}
}

export default  compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" })
)(Signin)

