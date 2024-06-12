import React, { useEffect, useState } from 'react'

export const Useeffectdemo = () => {

    let[Data,Setdata]=useState([])
    useEffect=(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>Setdata(json))
    },[])
  return (
    <div>
        {Data.map((File)=>{
            <h1>{File.title}</h1>,
            <img src={File.image} alt="" />
        })}
    </div>
  )
}
