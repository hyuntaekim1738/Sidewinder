import React from "react";
import "./Sessions.css";
import Logo from './game-icons-ouroboros.png';
import Filter from './filter.svg';

const Sessions = () => {
  return (
    <div className="sessions">
      <div className="div">
        <img className="game-icons-ouroboros" alt="Game icons ouroboros" src={Logo} />
        <div className="overlap-group">
          <table className="sessions-table">
            <thead>
              <tr>
                <th className="text-wrapper">Location</th>
                <th className="text-wrapper-3">Vehicle Make/Model</th>
                <th className="text-wrapper">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Time</th>
                <th className="date">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date</th>
                <th>
                  <button type="submit" className="filter-button">
                    Filter
                    <img src={Filter} alt="Filter Icon" className="icon" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="rectangle">
                <td>Sample Location</td>
                <td>Vehicle Make/Model</td>
                <td>Sample Time</td>
                <td>Sample Date</td>
                <td>Filter</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="text-wrapper-4">Project Name</div>
      </div>
    </div>
  );
};

export default Sessions;
