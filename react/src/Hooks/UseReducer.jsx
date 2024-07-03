import React, { useReducer } from 'react'

let initialstate={count:0}

function reducer(state,action){
switch(action.type){
    case"increment":
    return{count:state.count+1};
    
    case"decrement":
    return{count:state.count-1};

    case"reset":
    return initialstate;
}
}


export const UseReducer = () => {

let[state,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
