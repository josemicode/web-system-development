import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart.jsx'
import AvailableProducts from './components/AvailableProducts.jsx'

function App() {
  const products = [
    {
      "name": "Apple",
      "price": 2
    },

    {
      "name": "Pen",
      "price": 3
    },

    {
      "name": "Pineapple",
      "price": 5
    }
  ]

  const [userItems, setUserItems] = useState([]);

  const addItem = (newItem) => {
    const updatedItems = [...userItems, newItem];
    setUserItems(updatedItems);
  };

  const removeItem = (unwantedId) => {
    const updatedItems = userItems.filter((_, index) =>  index !== unwantedId);
    setUserItems(updatedItems);
  };

  return (
    <>
      <h1>Welcome to our humble shop </h1>
      <h2>Here's the list of available products</h2>
      <AvailableProducts products={products} handlerAdd={addItem} />

      <h2>Your Cart:</h2>
      <Cart items={userItems} handlerRemove={removeItem} />
    </>
  )
}

export default App