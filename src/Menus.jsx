import React from "react";
import "./App.css";

import { NavLink } from "react-router-dom"; // Correct the import path

const Menus = () => {
  return (
    <>
      <div style={{ textAlign: "center" , display:"flex" , width:"100%" , justifyContent:"center" , fontSize:"23px"}}>
        <NavLink
          exact
          data-activeclassname="active_class"
          to="/"
          style={{ textDecoration: "none", color: "black" , marginRight:"25px"}}
        >
          FormsTesting
        </NavLink>
        <br />
        <br />
        <NavLink
          exact
          data-activeclassname="active_class"
          to="/todo"
          style={{ textDecoration: "none", color: "black" , fontSize:"23px" , marginRight:"25px" }}
        >
          Todo
        </NavLink>
        <NavLink
          exact
          data-activeclassname="active_class"
          to="/User/cricket/hockey"
          style={{ textDecoration: "none", color: "black" , fontSize:"23px" }}
        >
          User
        </NavLink>

        <NavLink
          exact
          data-activeclassname="active_class"
          to="/Search"
          style={{ textDecoration: "none", color: "black" , fontSize:"23px" , marginLeft:"25px" }}
        >
          Search
          </NavLink>

      </div>
    </>
  );
};

export default Menus;
