import React, { useEffect, useState } from 'react'

export const Useeffectdemo = () => {
  let [Data,SetData]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>SetData(json))
  },[])
  return (
    <div>
    {Data.map((Store)=>{
      return(
        <div className='card' style={{width:"300px",display:"inline-block",margin:"10px"}}>
        <div className='card-header'>
          <h5 className='card-title'>
            {Store.title}
          </h5>
        </div>
        <div className='card-body'>
          <img src={Store.image} alt="" className='img-fluid'/>
          <h6>Price:<span className='badge bg-secondary'>{Store.price}</span><span>   </span>
          Category:<span className='badge bg-primary'>{Store.category}</span></h6>
        </div>
        <div>
          <p className='lead'>{Store.description}</p>
        </div>
        
        </div>
      )
    })}
    </div>
  )
}
