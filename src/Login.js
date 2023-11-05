import React from "react";
import "./Login.css";
import Logo from "./media/acr.png";
import Material from './media/material-symbols-lock.svg';
import Google from './media/google-logo.png';
import Image from './media/vector.svg';

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Company Logo" className="logo-img" />
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <input
            className="text-wrapper rectangle-3"
            type="text"
            placeholder="Username"
          />
          <input
            className="text-wrapper-2 rectangle-4"
            type="password"
            placeholder="Password"
          />
          <img className="vector" alt="Vector" src={Image} />
          <img className="material-symbols" alt="Material symbols" src={Material} />
          <div className="rectangle-2" />

          <div className="text-wrapper-3">Login with Google</div>
          <img className="google-logo" alt="Google logo" src={Google} />
          <img className="line" alt="Line" src="line-1.svg" />
          <img className="img" alt="Line" src="line-2.svg" />
          <div className="text-wrapper-4">Or</div>
          <p className="p"><a href="/">Don’t have an account? Register</a></p>
          <button type="submit" className="text-wrapper-5 rectangle-5">Login</button>
          <div className="text-wrapper-6"><a href="/">Forgot Password?</a></div>
        </div>
        <h2>Sidewinder</h2>
        <img className="vector-2" alt="Vector" src="image.svg" />
        <div className="text-wrapper-8">Login</div>
      </div>
    </div>
  );
};


export default Login;
