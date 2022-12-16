import { useState, useEffect } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"


export function AllItems() {
  const [count, setCount] = useState([])

  const receiveAPI=async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setCount(res.data)
    console.log(res.data)
  }

  useEffect(()=>{
    receiveAPI()
    // console.log(count)
  },[])
  return <><h1 className="Page-title">All Items</h1>
      <div className="shop">
      {count.map(items => 
      <Link key={items.id} className="card" to={`/detail/${items.id}`}>
            <div className="image-hold">
            <img src={items.image} alt="API-image" className="display" />
            </div>
            <div className="text-hold">
            <p className="title">{items.title}</p>
            <br />
            <p className="cat">category: {items.category}</p>
            <p className="price">Price: ${items.price}</p>
            </div>
          </Link>
          )}
      </div></>;
}
  