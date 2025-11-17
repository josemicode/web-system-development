import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AvailableProducts(props) {

  return (
    <ul>
      {props.products.map(p => (
        <li key={p.name}>
          <p>{p.name} - {p.price}€</p>
          <button onClick={props.handlerAdd} >Add</button>
        </li>
      ))}
    </ul>
  )
}

function Cart(props) {

  return (
    <>
      <h3>Total: </h3>
      <ol>
        {props.items.map(i => (
          <li key={"What do I put here lol"} >
            <p>{i.name}</p>
            <button onClick={() => props.handlerRemove(props.item)} ></button>
          </li>
        ))}
      </ol>
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

  const [userItems, setUserItems] = useState([]);

  const addItem = (newItem) => {
    const updatedItems = [...userItems, newItem];
    setUserItems(updatedItems);
  }

  const removeItem = (unwanted) => {
    const updatedItems = userItems.filter(item => item !== unwanted);
    setUserItems(updatedItems);
  }

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
