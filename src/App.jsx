import './App.css'
import NavBar from './components/NavBar';
import Data from './services/Data'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [cart,setCart]=useState([]);
  

  return (
    <>
      <Router>

      
      <NavBar cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/cart' element={<Cart cart={cart}/> }/>
        <Route path='/detail' element={<Detail cart={cart} setCart={setCart}/>}/>
      </Routes>
      
      </Router>
      
    </>
  )
}

export default App
