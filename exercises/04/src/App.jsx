import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AvailableProducts(props) {}

function Cart(props) {}

function App() {
  products = [
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

  return (
    <>
      <h1>List of Available Products</h1>
      <AvailableProducts />

      <h2>Your Cart:</h2>
      <Cart />
    </>
  )
}

export default App
