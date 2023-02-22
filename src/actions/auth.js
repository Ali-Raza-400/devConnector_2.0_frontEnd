import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthTokens";
// get user if its aleready exist in db....save in localstorage so always login automatically
export const LoadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = axios.get("api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type:AUTH_ERROR
    })
  }
};
//
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("api/user", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
