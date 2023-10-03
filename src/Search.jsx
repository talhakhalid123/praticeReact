import React, { useState } from "react";
import Rsearch from "./Rsearch";
const Search = () => {

const [Item , setItem] =useState("");
const eventinput =(e) =>{
const data = e.target.value;
setItem(data);
}

  return (
    <>
    <div className="search_item">
      <input
        type="text"
        placeholder=" Search item.... "
        onChange={eventinput}
        value={Item}
      />
      <br/>
      <Rsearch name={Item}/>
        </div>

    </>
  );
};

export default Search;
