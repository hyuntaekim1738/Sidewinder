import React from "react";
import "./SignUp.css";
import Logo from './game-icons-ouroboros.png';
import Material from './material-symbols-lock.svg';
import Google from './google-logo.png';
import Image from './vector.svg';

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="div">
        <img className="game-icons-ouroboros" alt="Game icons ouroboros" src={Logo} />
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
        <div className="text-wrapper-7">Sidewinder</div>
        <img className="vector-2" alt="Vector" src="image.svg" />
        <div className="text-wrapper-8">Sign Up</div>
      </div>
    </div>
  );
};


export default SignUp;