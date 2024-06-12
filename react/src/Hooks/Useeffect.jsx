import React, { useState } from 'react'

export const Useeffect = () => {

    let [Data,Setdata]=useState(0)

    let click=()=>{
        Setdata(Data++)
    }
  return (
    <div>
        <button onClick={click}>click</button>
        <h1>{Data}</h1>
    </div>
  )  
}

export const Useeffect1 = () => {
    
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>Setdata(json))


    let [Data,Setdata]=useState([])

    return (
      <div>

       {Data.map((Store)=>{
        <h1>{Store.title}</h1>
       })}

       
        
      </div>
    )
  }
