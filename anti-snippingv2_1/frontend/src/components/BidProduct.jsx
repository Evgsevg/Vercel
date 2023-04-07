import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom'
import Confetti from "react-confetti"
import {useToggle} from '../hooks/useToggle'
const BidProduct = ({socket}) => {
  const {name,price,date,status} = useParams()
  const [mydate, setDate] = useState(date)
  const [amount, setAmount] = useState(price)
  const navigate = useNavigate()
  const [error, setError] = useState(false)
const[clicked, setClicked]=useState(false);
const[isVisible,setVisible]=useToggle(true);

//animation
//isVisible&&
const handleClick=()=>
{
  setClicked(true);
}
const getValue=(e)=>
{
  e.preventDefault;
  console.log(date);
}




  const currDateTime=()=>{
     return new Date().getTime();
    };
currDateTime;



  const handleSubmit = (e) => {
    e.preventDefault()
    if(amount > Number(price)) {
      socket.emit("bidProduct", {amount, last_bidder: localStorage.getItem("userName"),name,date,status})
      async () => {
       await delay(2000);
       setClicked(true);
    } 
    
   
      navigate("/products")
    } else {
      setError(true)
    }
  }
  
  return (
    <div>
     
     <p>{mydate}</p>
     <p>{name}</p>


      <div className='bidproduct__container'>
        <h2>Place a Bid</h2>
        <form className="bidProduct__form" onSubmit={handleSubmit}>

          <h3 className='bidProduct__name'>{name}</h3>
 
          <label htmlFor='amount'>Bidding Amount</label>
          {error && <p style={{color: "red"}}>The bidding amount must be greater than {price}</p>}
          <input type="number" name='amount' value={amount} onChange={e => setAmount(e.target.value)} required/>

          <button className='bidProduct__cta' onClick={ handleClick}>SEND</button>
        {clicked &&<Confetti />}
        </form>
        </div>
    </div>
  )
}

export default BidProduct