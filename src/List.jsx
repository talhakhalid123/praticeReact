import React from "react";

const currentDate = new Date( );
const formattedDate = currentDate.getTime();

let greeting="";
const greetStyle={};

if(formattedDate >=1 && formattedDate <12){
  greeting='Good Morning';
  greetStyle.color='green';
}else if(formattedDate >=12 && formattedDate < 19){
greeting ='Good Afternoon';
greetStyle.color='orange';
}else{
  greeting='Good Night';
  greetStyle.color='blue';
}

let div= 10/3;


function List(){
    return(
<>

<div className="greet">
      <h1>
        Hello Sir! <span style={greetStyle}> { greeting} </span>
      </h1>
    </div>


    <h1>Sum of two number is {40+4}</h1>
    <h1>Subof two number is {30-3}</h1>
    <h1>div of two number is {div.toFixed(2)}</h1>
    <h1>Mul of two number is {10*3}</h1>

</>
    );
}

export default List;