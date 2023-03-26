import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const AddProduct = ({socket}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const[timesTamp,setTimesTamp]=useState(Date.now());
   const [date,setDate]=useState();
   const [newDate,setNewDate]=useState();
   const[status,setStatus]=useState(1);
  const navigate = useNavigate()
 
const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('addProduct', {name, price, owner: localStorage.getItem("userName"),timesTamp,date,status,newDate});
    navigate("/products")
  }
  //AddDateTime
 
  

  const localDateTime=e=>{
   setDate(e.target.value);
  }
  const setLocalDateTime=e=>{
   
    let newDate1=new Date(setDate(e.target.value));
    let ms= newDate1.getTime();
     /*setNewDate(newDate)
    */
   console.log(ms);
   }
  const currDateTime=()=>{
    if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  }
  

  
  return (
    <div>
      <div className='addproduct__container'>
        <h2>Add a new bid</h2>
        <form className="addProduct__form" onSubmit={handleSubmit}>
        <fieldset>
        <legend>Enter data in new Bid:</legend>
          <label htmlFor='name'>Title of the bid</label><br />
          <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} required/>
    <br />
          <label htmlFor='bid'>Starting bid</label><br />
          <input type="number" name='bid' value={price} onChange={e => setPrice(e.target.value)} required/>
          <input name="hiddenInput" value="hiddenValue" type="hidden" />
          <input name="timesTamp" value={timesTamp} type="hidden" />
          <input name="status" value={newDate} type="hidden" />
          <input name="status" value={status} type="hidden" />
          <p className='datepicker'>Selected Date:{date}</p>
          <label className='datepicker'htmlFor='datepicker'>Enter completion of the tender offer</label>
          <input className='datepicker' type="datetime-local" min={currDateTime}  name='datepicker' onChange={localDateTime} />

          <button className='addProduct__cta'>SEND</button>
         </fieldset>
        </form>
       
      </div>
       
    </div>
  )
}

export default AddProduct