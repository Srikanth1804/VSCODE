import React from 'react'
import {useForm} from "react-hook-form"
export const Hookform = () => {
const {register,handleSubmit, formState:{errors}}=useForm();

let btnfun=(DS)=>{
    console.log(DS);
}
  return (
    <div>
        <form action="" onSubmit={handleSubmit(btnfun)}>
        <input type="text" id='text'{...register("text",{required:"Fill"})}/>
        {errors.text&&<p>Wrong</p>}
        <input type="submit" />
        </form>
        
    </div>
  )
}
