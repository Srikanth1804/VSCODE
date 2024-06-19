import React, { createContext } from 'react'
import { A2 } from './A2'
export let greeting=createContext()
export const A1 = () => {

    let DAta="hello"
  return (
    <div>
      <greeting.Provider value={DAta}>
        <A2/>
      </greeting.Provider>
    </div>
  )
}
