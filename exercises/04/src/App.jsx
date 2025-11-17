import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AvailableProducts(props) {
  return (
    <>
      <p>Hold on</p>
    </>
  )
}

function Cart(props) {

  return (
    <>
      <h3>Total: </h3>
    </>
  )
}

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

  [userItems, setUserItems] = useState([]);

  const addItem = (newItem) => {
    const updatedItems = [...userItems, newItem];
    setUserItems(updatedItems);
  }

  const removeItem = (id) => {
    const updatedItems = `I'll filter this I guess? Based on the ${id} ofc`
    setUserItems(updatedItems);
  }

  return (
    <>
      <h1>Welcome to our humble shop </h1>
      <h2>Here's the list of available products</h2>
      <AvailableProducts products={products}/>

      <h2>Your Cart:</h2>
      <Cart items={userItems} handlerAdd={addItem} handlerRemove={removeItem}/>
    </>
  )
}

export default App
