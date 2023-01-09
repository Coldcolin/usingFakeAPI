import React from "react";
import "./Cart.css";
import photo from "../../assets/WeddingRing.jpg"

const CartItems =()=>{
    return(
        // <div className="Cart-Items">
          <div className="Cart-Item">
            <img src={photo} alt="cart-item"/>
            <h2>Title</h2>
            <div className="Cart-Calc">
              <button>+</button>
              0
              <button>-</button>
            </div>
            <h3>$300</h3>
            <p>Remove</p>
          {/* </div> */}
        </div>
    )
}

export default CartItems