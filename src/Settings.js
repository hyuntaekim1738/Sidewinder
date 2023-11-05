import React from "react";
import "./Settings.css";
import Logo from './game-icons-ouroboros.png';

const Settings = () => {
  return (
    <div className="settings">
      <div className="div">
        <img className="game-icons-ouroboros" alt="Game icons ouroboros" src={Logo} />
        <div className="overlap-group">
          <div className="overlap">
            <input type="text" className="text-wrapper" placeholder="Engine Horsepower"/>
          </div>
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Vehicle Make</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle-2" />
            <div className="text-wrapper-3">Vehicle Model</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Save</div>
          </div>
          <div className="overlap-4">
            <div className="rectangle-3" />
            <div className="text-wrapper-5">Cancel</div>
          </div>
          <div className="overlap-5">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Vehicle Year</div>
          </div>
        </div>
        <div className="text-wrapper-6">Project Name</div>
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="text-wrapper-7">Settings</div>
      </div>
    </div>
  );
};

export default Settings;