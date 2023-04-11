import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connect With Your Friends Around You on LamaSocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="passWord" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create Anew Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
