import React, { useEffect, useState } from 'react'

export const CustomHook = (url) => {


const [Data,SetData]=useState([])

useEffect(()=>{
    fetch(url)
    .then((file)=>{file.json()})
    .then((end)=>{SetData(end)})
     .catch((error)=>{
        console.log("Error fetching data:",error);
     }) 
},[url])
  return[Data]
}
