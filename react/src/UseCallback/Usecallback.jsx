import React, { useState ,useCallback, useEffect} from 'react'

export const UC = () => {

let [File,Setfile]=useState()
console.log(File);
let Data=useCallback(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>Setfile(json))
},[])

useEffect(()=>{
    Data()
},[])

  return (
    <div>

    </div>
  )
}
