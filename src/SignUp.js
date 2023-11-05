import React from "react";
import "./SignUp.css";
import Logo from "./media/acr.png";
import Material from './media/material-symbols-lock.svg';
import Google from './media/google-logo.png';
import Image from './media/vector.svg';

export const SignUp = () => {
  return (
    <div className="signup">
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

          <div className="text-wrapper-3">Sign up with Google</div>
          <img className="google-logo" alt="Google logo" src={Google} />
          <img className="line" alt="Line" src="line-1.svg" />
          <img className="img" alt="Line" src="line-2.svg" />
          <div className="text-wrapper-4">Or</div>
          <button type="submit" className="text-wrapper-5 rectangle-5">Sign Up</button>
        </div>
        <img className="vector-2" alt="Vector" src="image.svg" />
        <div className="text-wrapper-8">Sign Up</div>
      </div>
    </div>
  );
};


export default SignUp;