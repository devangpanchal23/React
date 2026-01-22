import { useState } from 'react'
import './App.css'
import Product from './Product.jsx'

function App() {

  return (
    <div className="App">
      <h1>Welcome to My Store</h1>
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default App
