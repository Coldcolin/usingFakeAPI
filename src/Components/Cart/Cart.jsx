import React from 'react'
import "./Cart.css";
import CartItems from "./CartItems.jsx"

const Cart = () => {
  return (
    <div className="Cart-Holder">
      <div className="Cart-Box">
      <div className="Cart-Title">
        <h4>Shopping Cart</h4>
        <h3>Total: $600</h3>
        <p>Remove all</p>
      </div>
      <div className="Cart-Items">
      {
        Array.from(Array(20).keys())?.map((index)=>(
          <CartItems key={index}/>
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button >Check Out</button>
      </div>
      </div>
    </div>
  )
}

export default Cart