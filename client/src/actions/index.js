import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "https://young-garden-82503.herokuapp.com/signup",
      // "http://localhost:5000/signup",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "https://young-garden-82503.herokuapp.com/signin",
      // "http://localhost:5000/signin",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ''
  };
};

