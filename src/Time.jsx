import React, { useState } from "react";

const Time = () => {

  const currentTime = new Date().toLocaleDateString();

  const [Time, setCurrentTime] = useState(currentTime);
  const updateTime = () => {
    const newCurrTime= new Date().toLocaleTimeString()
    setCurrentTime(newCurrTime);
  };
  setInterval(updateTime ,1000);

  return (
    <>
      <div style={{ textAlign: "center", margin: "23px" }}>
        <h1 style={{margin:"23px"}}>{Time}</h1>
    
        <button onClick={updateTime}  style={{
            width: "150px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "pink",
            textTransform:"capitalize",
          }}>updated time</button>
      </div>
    </>
  );
};
export default Time;
