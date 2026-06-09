import { useState } from 'react'
import './App.css'
import FoodSection from './components/FoodSection/FoodSection'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Navbar 
        addToCart={addToCart} 
        setAddToCart={setAddToCart} />

      <FoodSection 
        setAddToCart={setAddToCart}
        addToCart={addToCart} />
    </>
  )
}

export default App
