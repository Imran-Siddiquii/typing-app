import React,{useState} from 'react'
// import { useState } from 'react';

const Toggle = () => {
    const [buttonColor,setButtonColor]=useState("white")
  const Toggl=(e)=>{

    
    if(e.target.style.background=="white"){
     e.target.style.background="red"
    }
    else if(e.target.style.background=="red"){
     e.target.style.background="black"
    }else{
     console.log("hello")
    }}
  return (
    <div className="App d-flex">
      <button className="box"  name ="button1"  onClick={Toggl}></button>
      <button className="box"  name ="button2"  onClick={Toggl}></button>
      <button className="box"  name ="button3"  onClick={Toggl}></button>
      <button className="box"  name ="button4"  onClick={Toggl}></button>
      <button className="box"  name ="button5"  onClick={Toggl}></button>
      <button className="box"  name ="button6"  onClick={Toggl}></button>
      <button className="box"  name ="button7"  onClick={Toggl}></button>
      <button className="box"  name ="button8"  onClick={Toggl}></button>
      <button className="box"  name ="button9"  onClick={Toggl}></button>
    </div>
  )
}

export default Toggle;