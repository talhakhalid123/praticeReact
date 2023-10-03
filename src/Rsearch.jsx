import React from "react";

const Rsearch = (props) =>{
    const pick = `https://source.unsplash.com/400x300/?${props.name}`
    return(
        <>
        <img src={pick} alt="talha" />
        </>
    );
};

export default Rsearch;