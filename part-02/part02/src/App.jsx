import { useState } from 'react'
import './App.css'
import Product from './Product.jsx'
import ProductTab from './ProductTab.jsx'
import Activity from './Activity.jsx'
import ProductCard from './ProductCard.jsx'

function App() {


  return (
    // <>
    //   <Activity userName="Devang" textColor="blue"/>
    //   <Activity userName="Alice" textColor="green"/>
    //   <Activity userName="Bob" textColor="red"/>
    //   <Product/>
    //   <ProductTab/>
    // </>
    <div className="app">
      <h2 className="app-heading">
        Blockbuster Deals on Computer Accessories | Shop Now
      </h2>

      <div className="product-container">
        <ProductCard
          title="Logitech MX Master 3S"
          description={["8,000 DPI", "5 Programmable Buttons"]}
          oldPrice="12,495"
          newPrice="8,999"
        />

        <ProductCard
          title="Apple Pencil (2nd Gen)"
          description={["Intuitive touch surface", "Designed for iPad Pro"]}
          oldPrice="11,900"
          newPrice="9,199"
        />

        <ProductCard
          title="Zebronics Zeb-Transformer"
          description={["RGB Keyboard", "Gaming Combo"]}
          oldPrice="1,599"
          newPrice="899"
        />

        <ProductCard
          title="Portronics Toad 23 Mouse"
          description={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
          oldPrice="599"
          newPrice="278"
        />
      </div>
    </div>
  )
}

export default App
