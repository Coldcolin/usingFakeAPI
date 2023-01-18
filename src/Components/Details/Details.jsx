import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Details.css";
import Swal from 'sweetalert2'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart, total} from "../../features/features.js"
import Loading from "../Loading/Loading"

const Details = ({theSetter}) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProducts(){
    try{
      setLoading(true)
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      // console.log(res.data);
      setProducts(res.data)
      setLoading(false)
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
      {
        loading? <Loading/>: <div className="Details-Card">
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
          <div className="Detail-button" onClick={()=>{
            dispatch(addToCart(products));
            dispatch(total());
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item added to Cart',
              showConfirmButton: false,
              timer: 2000
            })
            }}>
            Add to cart
          </div>
        </div>
      </div> 
      }
    </div>
  )
}

export default Details