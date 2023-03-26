import React from 'react'
import './style.css';
setTimeout(()=>{
    console.log(text.textContent="Text1");
    text.textContent="Text1";
},0);
 setTimeout(()=>{
text.textContent="Text2";
},4000);
setTimeout(()=>{
    text.textContent="Text3";
},8000);
setTimeout(()=>{
    text.textContent="Text4";
},12000);
function index() {
  return (
    <div>
        <div class="container">
        <span class="text first-text">
         
        </span>
    <span class="text sec-text">
    Place your bets!
    </span>
</div>
    </div>
  )
}

export default index