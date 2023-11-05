import { React, useState } from "react";
import "./Details.css";
import Logo from './media/game-icons-ouroboros.png';


const Details = () => {
  const [displayText, setDisplayText] = useState("");

  const generateTips = () => {
    setDisplayText('This section will display artificial intelligence generated recommendations for racing performance upon clicking the "Get Tips/Help" button');
  }
  return (
    <div className="details">
      <div className="div">
        <div className="text-wrapper">Sidewinder</div>
        <img className="vector" alt="Vector" src="vector.svg" />
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
          <input className="text-wrapper-14" placeholder="Enter your notes here" type="text"></input>
          <p className="p">
            {displayText}
          </p>
          <div className="overlap-2">
            <div className="text-wrapper-15">Get</div>
            <button className="text-wrapper-16 rectangle-2" onClick={generateTips}>Get Tips/Help</button>
          </div>
        </div>
        <img className="game-icons-ouroboros" alt="Game icons ouroboros" src={Logo} />
      </div>
    </div>
  );
};

export default Details;