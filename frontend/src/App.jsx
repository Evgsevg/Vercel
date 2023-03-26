import Header from './components/Header'
import Home from "./components/Home"
import AddProduct from "./components/AddProduct"
import BidProduct from "./components/BidProduct"
import Products from "./components/Products"
import EditButton from "./components/EditButton"
import Nav from "./components/Nav"
import ErrorPage from './components/ErrorPage'
/*import Timer from './components/Timer'
*/
import Animation from './components/Animation'

import DateTime from './components/DatePicker'
import {BrowserRouter as Router, Route, Routes,Link} from "react-router-dom"
import './App.css'; 

import socketIO from "socket.io-client"
const socket = socketIO.connect("http://localhost:4000")









function App() {
  return (
    <div>
      <Header/>  
    <h1><Animation /></h1>
    
    <Router>
      
      <nav>
        
      <Link className={"link-styles"} to='/datepicker'>datepicker</Link>
      <Link className={"link-styles"} to='/products'>All Bid</Link>
      <Link className={"link-styles"} to='/products/add'>AddBid</Link>
      <Link className={"link-styles"} to='/products/bid/:name/:price'>BidProduct</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/datepicker" element={<DateTime/>}/>
        <Route exact path="/products/add" element={<AddProduct socket={socket}/>}/>
        <Route exact path="/products/bid/:name/:price" element={<BidProduct socket={socket}/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;