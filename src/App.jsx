import './App.css'
import { useState } from 'react'

import Data from './services/Data'
function App() {
  const [product,setProduct]=useState([]);  

  return (
    <>
      <Data setProduct={setProduct}/>
      
    </>
  )
}

export default App
