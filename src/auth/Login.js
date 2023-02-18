import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData,setformData]=useState({
    email:"",
    password:"",
  })
const {email,password}=formData
const onChange =(e)=>setformData({...formData,[e.target.name]:e.target.value})
const onSubmit =e=>{
    e.preventDefault()
    console.log("formData...",formData);
}
  return (
    <div className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} required onChange={onChange} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} required onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
       Create an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
