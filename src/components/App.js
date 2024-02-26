import Banner from "./Banner"
import Cart from './Cart'
import Footer from "./Footer"
import ShoppingList from "./ShoppingList"
import "../styles/Layout.css"
import { useState, useEffect } from "react"

function App() {
  const savedCart = localStorage.getItem("cart")
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App
