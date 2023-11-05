import "./Sessions.css";
import Logo from "./media/game-icons-ouroboros.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "./media/gradl.jpg";

const Sessions = () => {
  const [raceData, setRaceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/DragStripRaces");
        setRaceData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  // Get unique dates and vehicles for the dropdowns
  const dates = [...new Set(raceData.map(item => item.Date))];
  const vehicles = [...new Set(raceData.map(item => item.Vehicle))];

  const handleSubmit = () => {
    setFilteredData(raceData.filter(item => item.Date === selectedDate && item.Vehicle === selectedVehicle));
  };

  return (
    <div
      className="session"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Company Logo" className="logo-img" />
          <h1>Sidewinder</h1>
        </div>
        <div className="settings-button">
          <button className="blue-button" href="/settings">
            <Link className="button-link" to="/settings">
              Settings
            </Link>
          </button>
        </div>
      </div>

      <div className="main-content">
        <h2 className="title">Home</h2>
        <div className="rounded-box">
          <div>
            <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
              <option value="">Select Date</option>
              {dates.map((date, index) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </select>
            <select value={selectedVehicle} onChange={e => setSelectedVehicle(e.target.value)}>
              <option value="">Select Vehicle</option>
              {vehicles.map((vehicle, index) => (
                <option key={index} value={vehicle}>{vehicle}</option>
              ))}
            </select>
            <button onClick={handleSubmit}>Submit</button>
            {filteredData.map((item, index) => (
              <div key={index}>
                <h2>Date: {item.Date}</h2>
                <p>Time: {item.Time}</p>
                <p>Vehicle: {item.Vehicle}</p>
                <p>Location of Race: {item['Location of Race']}</p>
                <p>Total Race Time: {item['Total Race Time']}</p>
                <p>Reaction Time: {item['Reaction Time']}</p>
                <p>60-foot time: {item['60-foot time']}</p>
                <p>330-foot time: {item['330-foot time']}</p>
                <p>660-foot time: {item['660-foot time']}</p>
                <p>1/8-mile speed: {item['1/8-mile speed']}</p>
                <p>1,000-foot time: {item['1,000-foot time']}</p>
                <p>1/4-mile time: {item['1/4-mile time']}</p>
                <p>1/4-mile speed: {item['1/4-mile speed']}</p>
                <p>MPH: {item.MPH}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
