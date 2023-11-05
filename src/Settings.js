import React from "react";
import "./Settings.css";
import Logo from "./media/acr.png";

const Settings = () => {
  return (
    <div className="settings">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Company Logo" className="logo-img" />
          <h1>Sidewinder</h1>
        </div>
      </div>

      <div className="content">
        <div className="overlap-group">
          <h2>Settings</h2>
          <form>
            <div className="setting-input">
              <input placeholder="Vehicle Make" type="text" className="rounded-input" />
            </div>
            <div className="setting-input">
              <input placeholder="Vehicle Model" type="text" className="rounded-input" />
            </div>
            <div className="setting-input">
              <input placeholder="Vehicle Year" type="text" className="rounded-input" />
            </div>
            <div className="setting-input">
              <input placeholder="Engine Horsepower" type="text" className="rounded-input" />
            </div>
            <div >
              <button type="submit" className="blue-button big-button">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;




