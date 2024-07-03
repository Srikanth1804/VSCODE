import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
export const UseRef = () => {

let text=useRef()

useEffect(()=>{
  text.current.setAttribute("style","color:blue")




},[])
   


  return (
    <div ref={text}>
        <h1>Hello</h1>
    </div>
  )
}

