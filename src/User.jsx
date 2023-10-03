import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const { cricket, hockey } = useParams();
  const lol = useLocation();
  return (
    <>
      <div className="user_para">
        <h1>
          Talha like {cricket} or {hockey} Game
        </h1>
        <p> this is my location {lol.pathname}</p>
        {lol.pathname === `/User/cricket/hockey` ? (
          <button onClick={() => alert(`awosome`)}> Click Me </button>
        ) : null}
      </div>
    </>
  );
};

export default User;