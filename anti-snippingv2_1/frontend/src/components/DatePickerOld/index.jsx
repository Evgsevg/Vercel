import React,{useState} from 'react'
//import {useLocalStorage} from '../../hooks/useLocalStorage'
import './style.css';

function DatePicker() {
  
  const [date,setDate]=useState();
  //const[bidDateTime, setbidDateTime]=useLocalStorage([],'bidDateTime')

  const localDateTime=e=>{
   setDate(e.target.value);
  }
  const currDateTime=()=>{
    if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  }
  /*
  const addBidDateTimeToLocalStorage=(localDateTime)=>
  {
    const newItem=localDateTime;
    setbidDateTime(...bidDateTime,newItem);
  }
  */
//addBidDateTimeToLocalStorage;
  return (
    <div className="datepicker">
        <p>Selected Date:{date}</p>
        <label htmlFor='datepicker'>Enter completion of the tender offer</label>
        <div><input type="datetime-local" min={currDateTime}  name='datepicker' onChange={localDateTime} /></div>
    </div>
  )
}

export default DatePicker