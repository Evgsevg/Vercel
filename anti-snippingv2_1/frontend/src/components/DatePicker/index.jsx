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
    <>
    <div classNameName="timer">
       <span>{minutes}</span>
       <span>:</span>
       <span>{seconds}</span>
</div>

<div classNameName="countdown-wrapper">
        <h1 classNameName="title">до Нового Года осталось:</h1>
        <div id="year" classNameName="year"></div>
        <div className="countdown" id>
            <div className="time">
                <h2 id="days">00</h2>
                <small>дней</small>
            </div>
            <div className="time">
                <h2 id="hours">00</h2>
                <small>часов</small>
            </div>
            <div className="time">
                <h2 id="minutes">00</h2>
                <small>минут</small>
            </div>
            <div className="time">
                <h2 id="seconds">00</h2>
                <small>секунд</small>
            </div>
        </div>
        <div className="preloader" id="preloader">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    </div>















</>






    
  )
}

export default DatePicker