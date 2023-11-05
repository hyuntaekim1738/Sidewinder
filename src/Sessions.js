
import "./Sessions.css";
import Logo from './media/game-icons-ouroboros.png';
import {Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from './media/gradl.jpg';

const Sessions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/raceData');
      setData(result.data);
    };

    fetchData();
  }, []);
  
  return (
    <div className="session" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Company Logo" className="logo-img" />
          <h1>Sidewinder</h1>
        </div>
        <div className="settings-button">
          <button className="blue-button" href="/settings"><Link className="button-link" to="/settings">Settings</Link></button>
        </div>
      </div>

      <div className="main-content">
        <h2 className="title">Home</h2>
        <div className="rounded-box">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <button className="blue-button">Filter</button>
                </th>
                <th>Vehicle Make/Model</th>
                <th>Total Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sample vehicle</td>
                <td>Sample time</td>
                <td>Sample date</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sample vehicle</td>
                <td>Sample time</td>
                <td>Sample date</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sample vehicle</td>
                <td>Sample time</td>
                <td>Sample date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sessions;


