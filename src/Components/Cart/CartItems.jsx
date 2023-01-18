import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeItem, addToCart, minusItem, total } from "../../features/features";

const CartItems =(props)=>{
  const [change, setChange] = useState(false)
  useEffect(()=>{
    dispatch(total())
}, [change])
  const dispatch = useDispatch()
    return(
        // <div className="Cart-Items">
          <div className="Cart-Item">
            <img src={props.image} alt="cart-item"/>
            <h6>{props.title}</h6>
            <div className="Cart-Calc">
              <button  onClick={()=> {dispatch(addToCart(props.item)); setChange(!change)}}>+</button>
              <p>{props.QTY}</p>
              <button onClick={()=> {dispatch(minusItem(props.item)); setChange(!change)}}>-</button>
            </div>
            <h3>${props.price * props.QTY}</h3>
            <p onClick={()=>{ dispatch(removeItem(props.item))}}>Remove</p>
          {/* </div> */}
        </div>
    )
}

export default CartItems