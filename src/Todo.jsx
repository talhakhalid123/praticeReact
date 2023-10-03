import React, { useState } from "react";
import ItemList from "./ItemList";

const Lists = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  const listEvent = (item) => {
    setList(item.target.value);
  };

  const lisOfItems = () => {
    setItems((pveitem) => {
      return [...pveitem, list];
    });
    setList("");
  };
  const deleteItem = (id) =>{
    // console.log("deleted");
    setItems((pveitem)=>{
        return pveitem.filter((arrele,index)=>{
            return index !== id
        })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="frist_div">
          <h1 style={{ paddingTop: "20px" }}> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add items list"
            value={list}
            onChange={listEvent}
          />
          <br />
          <br />
          <button onClick={lisOfItems}> + </button>

          <ul>
            {items.map((eve, index) => {
              return <ItemList key={index} id={index} text={eve}  onSelect={deleteItem} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Lists;
