import React, { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
const Register = ({ setAlert, register ,isAuthenticated}) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("wrong credentials", "danger");
    } else {
      register({ name, email, password });
      // const newUser = { name, email, password };
      // console.log("==>😒😒", newUser);
      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const body = JSON.stringify(newUser);
      //   // console.log("🤦‍♂️", body);
      //   const res = await axios.post(
      //     "/api/user",
      //     body,
      //     config
      //   );
      //   console.log("data...sending to DB", res.data);
      // } catch (error) {
      //   console.log("catch block run",error.response.data);
      // }
      // const res=axios.post('/api/register',data)
      // console.log(formData);
    }
  };

  if(isAuthenticated){
    return <Navigate to="/dashboard"/>
  }
  return (
    <div className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
};
const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProp, { setAlert, register })(Register);
