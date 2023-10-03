import React from "react";


function Card(props){
    return(
<> 

<div className="main__cards">
    <div className="cards">
        <img src={props.imgsrc} alt="ok" />
    </div>
    <div className="tal">
        <h3>{props.name}</h3>
    </div>
    <div className="titel"> 
    <h2>{props.titel}</h2>
    <a href="#">
        <button>{props.button}</button>
    </a>
    </div>
</div>

    </>
    );
}

export default Card;