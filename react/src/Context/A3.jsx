import React, { useContext } from 'react'
import { greeting } from './A1'

export const A3 = () => {
    let Name=useContext(greeting)
  return (
    <div>
        <h1>{Name}</h1>
    </div>
  )
}
