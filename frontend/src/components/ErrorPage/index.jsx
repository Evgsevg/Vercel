import React from 'react'
import './style.css';
function index() {
  return (
<div>
    <div>index</div>
    <div className="error">Error message</div>
    <div className="info">
       Info message
    </div>
    <div className="success">
       Successful operation message
    </div>
    <div className="warning">
       Warning message
    </div>
    <div className="validation">
       Validation message 1 <br />
       Validation message 2 
    </div>
    </div>
  )
}

export default index