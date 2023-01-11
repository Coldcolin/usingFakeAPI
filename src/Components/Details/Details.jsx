import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Details.css";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/features.js"

const Details = ({theSetter}) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [products, setProducts] = useState([]);

  async function getProducts(){
    try{
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      // console.log(res.data);
      setProducts(res.data)
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }


  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="Details-Holder" style={theSetter}>
      <div className="Details-Card">
        <div className="Details-Image-Holder">
          <img src={products.image} alt="productImage"  className="Detail-Image"/>
        </div>
        <div className="Details-details" style={{color: "black"}}>
          <div>
          <h3>title: {products.title}</h3>
          <p>Category: {products.category}</p>
          <p>Description: {products.description}</p>
          <br/>
          <h4>Price: ₦ {products.price}</h4>
          <h5>Rating: 3.5</h5>
          </div>
          <div className="Detail-button" onClick={()=>{dispatch(addToCart(products))}}>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details