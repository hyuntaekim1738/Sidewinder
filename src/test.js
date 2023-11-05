import React, { useState, useEffect } from "react";

function Test() {
  const [data, setData] = useState({});
  const raceID = "6546b55174909bb230052509"; // replace with your actual raceID

  useEffect(() => {
    // POST request
    fetch('http://localhost:5001/db-up/raceid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raceID: raceID }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('POST response:', data);
  
      // GET request
      fetch(`http://localhost:5001/db-up/gpt?raceID=${raceID}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('GET response:', data);
          setData(prevState => ({...prevState, message: data.message}));
        });
    });
  }, []);
  

  // Assuming data.message is an object with properties 'property1' and 'property2'
  return (
    <div>
      <h1>Data from Flask API</h1>
      {data.message ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
  
}

export default Test;
