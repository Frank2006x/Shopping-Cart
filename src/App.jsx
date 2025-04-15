import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar';
import Data from './services/Data'
function App() {
  const [product,setProduct]=useState([]);  

  return (
    <>
      <Data setProduct={setProduct}/>
      <NavBar/>
      
    </>
  )
}

export default App
