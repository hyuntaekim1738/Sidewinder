import { React, useState } from "react";
import "./Details.css";
import Logo from "./media/acr.png";


const Details = () => {
  const [displayText, setDisplayText] = useState("");

  const generateTips = () => {
    setDisplayText('This section will display artificial intelligence generated recommendations for racing performance upon clicking the "Get Tips/Help" button');
  }
  return (
    <div className="details" >
      <div className="div">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Company Logo" className="logo-img" />
            <h1>Sidewinder</h1>
          </div>
        </div>
        <div className="overlap-group">
          <table className="details-table">
            <thead><h2>Session X</h2></thead>
            <tbody>
              <tr>
                <td>Date/Time</td>
                <td>Sample date time</td>
              </tr>
              <tr>
                <td>Total Time</td>
                <td>Sample total time</td>
              </tr>
              <tr>
                <td>R/T</td>
                <td>Sample R/T</td>
              </tr>
              <tr>
                <td>60'</td>
                <td>Sample 60'</td>
              </tr>
              <tr>
                <td>330</td>
                <td>Sample 330</td>
              </tr>
              <tr>
                <td>1/8</td>
                <td>Sample 1/8</td>
              </tr>
              <tr>
                <td>MPH</td>
                <td>Sample MPH</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>Sample 1000</td>
              </tr>
              <tr>
                <td>1/4</td>
                <td>Sample 1/4</td>
              </tr>
              <tr>
                <td>MPH</td>
                <td>Sample MPH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overlap">
          <div className="text-wrapper-13"><h2>Notes</h2></div>
          <input className="text-wrapper-14" placeholder="Enter your notes here" type="text" />
          <div>
            <button className="text-wrapper-16 rectangle-2" onClick={generateTips}>Get Tips/Help</button>
          </div>
          <p className="p">
            {displayText}
          </p>
          
        </div>

      </div>
    </div>
  );
};

export default Details;