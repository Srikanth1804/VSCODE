import React from 'react'
import { CustomHook } from './CustomHook';
export const ActorData = () => {
    
let [Data]=CustomHook("http://localhost:3000/Actordata")


    return (
    <div>
        {Data.map((Store)=>{
          return(
            <div>
               <h1>{Store.Name}</h1>
            </div>
           
          )
        })}
    </div>
  )
}
