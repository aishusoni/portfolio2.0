import React, { Component, useState } from 'react'

const Test=(props)=>{
  const [counter,setCounter]=useState(props.start);
  const [bcr,setbcr]=useState(true);
  if(counter===72) setCounter(0);
  return(
    <React.Fragment className={bcr ? "bckr":"bcky"}>
      <button style={{
        backgroundColor:"blueviolet",
      }} onClick={()=>{setbcr(!bcr)}}>{counter}</button>
    </React.Fragment>  
    );

}
export default Test;