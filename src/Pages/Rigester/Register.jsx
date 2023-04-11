import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWapper">
        <div className="registerLeft">
          <h3 className="registerLogo">LamaSocial</h3>
          <span className="registerDesc">
            Connect With Your Friends Around You on LamaSocial
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="UserName" className="registerInput" />
            <input placeholder="Email" className="registerInput" />

            <input placeholder="PassWord" className="registerInput" />
            <input placeholder="PassWord Again" className="registerInput" />
            <button className="registerButton">Sign Up</button>

            <button className="registerRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
