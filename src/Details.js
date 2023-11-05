import React from "react";
import "./Details.css";
import Logo from './game-icons-ouroboros.png';

const Details = () => {
  return (
    <div className="details">
      <div className="div">
        <div className="text-wrapper">Project Name</div>
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src="rectangle-21.svg" />
          <img className="img" alt="Rectangle" src="rectangle-22.svg" />
          <div className="text-wrapper-2">Session X</div>
          <div className="text-wrapper-3">Date/Time</div>
          <div className="text-wrapper-4">Total Time</div>
          <div className="text-wrapper-5">R/T</div>
          <div className="text-wrapper-6">60’</div>
          <div className="text-wrapper-7">330</div>
          <div className="text-wrapper-8">1/8</div>
          <div className="text-wrapper-9">MPH</div>
          <div className="text-wrapper-10">1000</div>
          <div className="text-wrapper-11">1/4</div>
          <div className="text-wrapper-12">MPH</div>
        </div>
        <div className="overlap">
          <div className="text-wrapper-13">Notes</div>
          <div className="text-wrapper-14">Enter your notes here</div>
          <p className="p">
            This section will display artificial intelligence generated recommendations for the user’s racing
            performance upon clicking the “Get Tips/Help” button
          </p>
          <div className="overlap-2">
            <div className="text-wrapper-15">Get</div>
            <div className="rectangle-2" />
            <div className="text-wrapper-16">Get Tips/Help</div>
          </div>
        </div>
        <img className="game-icons-ouroboros" alt="Game icons ouroboros" src={Logo} />
      </div>
    </div>
  );
};

export default Details;