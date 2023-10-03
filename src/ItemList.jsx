import React from "react";

const ItemList = (props) => {

   
  return (
    <>
      <div className="todo_list">
        <i className="fa-regular fa-circle-xmark" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ItemList;
