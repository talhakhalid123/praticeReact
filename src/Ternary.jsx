import React from "react";

const Ternary = (props) =>{

let { x , y , z}= props;

if( x===y && y===z ){
    return(
        <>
    
        <div>
            <h1 style={{textAlign:"center" ,color:"green" , marginBottom:"23px"}}>{x}{y}{z}</h1>
            <h2 style={{textAlign:"center" ,color:"blue" , marginBottom:"23px"}}>congrats its same</h2>
        </div>
        </>
    );
}else{
    return(
    <>
    <div>
    <h1 style={{textAlign:"center",color:"red" ,marginBottom:"23px"}}>{x}{y}{z}</h1>
            <h2 style={{textAlign:"center", color:"orange" , marginBottom:"23px"}}>  try again</h2>
    </div>
    </>
    );
}
   
}


export default Ternary;