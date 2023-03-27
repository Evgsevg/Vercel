import React,{useEffect, useState} from 'react'
//import {useLocalStorage} from '../../hooks/useLocalStorage'
import './style.css';

function DatePicker() {
  
  const [timeLeft,setTimeLeft]=useState(1*60);
  const [isCounting,setIsCounting]=useState(false);

  //const[bidDateTime, setbidDateTime]=useLocalStorage([],'bidDateTime')
const minutes=getPadTime(Math.floor(timeLeft /60))
const seconds=getPadTime(Math.floor(timeLeft-minutes * 60))

useEffect(()=>{
  const interval = setInterval(() => {
    isCounting &&
  setTimeLeft((timeLeft)=>(timeLeft >=1 ? timeLeft-1:0));
},1000);
if(timeLeft===0)setIsCounting(false);
return()=>{clearInterval(interval)}
},[timelef,isCounting]);

const handleStart=()=>{
  if(timeLeft===0)setTimeLeft(3);
  setIsCounting(true);
}
const handleStop=()=>{
  setIsCounting(false);
}
const handleReset=()=>{
  setIsCounting(false);
  setTimeLeft(3);
}
  return (
    <div className="timer">
       <span>{minutes}</span>
       <span>:</span>
       <span>{seconds}</span>
    </div>
  )
}

export default DatePicker