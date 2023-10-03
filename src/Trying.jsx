import React, { useState } from "react";

const Trying = () => {
    const  purple="#8e44ad"
  const [bg, setBg] = useState("purple");
  const [names, setName] = useState("Click Me");

  const bgChange = () => {
    const newBg = "#34495e";
    const newName = "ohooo 😲";
    setBg(newBg);
    setName(newName);
  };

  const bgBack = () => {
    setBg(purple);
    setName("yeahh 👍");
  };

  return (
    <>
      <div
        style={{
          background: bg,
          width: "400px",
          height: "200px",
          margin: "auto",
          textAlign: "center"
        }}
      >
        <button
          onMouseEnter={bgChange}
          onMouseLeave={bgBack}
          style={{
            textAlign: "center",
            margin: "50px",
            width: "150px",
            height: "50px",
            borderRadius:"12px",
          }}
        >
          {names}
        </button>
      </div>
    </>
  );
};

export default Trying;
