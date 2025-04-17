import './App.css'
import NavBar from './components/NavBar';
import Data from './services/Data'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
      <Router>

      
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/cart' element={<Cart/> }/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
      
      </Router>
      
    </>
  )
}

export default App
