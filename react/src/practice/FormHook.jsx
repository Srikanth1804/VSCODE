import React from 'react'
import { useForm } from 'react-hook-form'
export const FormHook = () => {
    let {register,handleSubmit,formState:{errors}}=useForm();

    let submitfunction=(file)=>{
        console.log(file);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(submitfunction)}>
        <input type="text" id='username' {...register("username",{required:"Enter something"})} />
        {errors.username&&<p></p>}
        <input type="password" id='pwd'{...register("pwd",{required:"fill",minLength:{value:10,message:"Password must required 0-9"},pattern:"[0-9]{10}"})} />
        {errors.pwd&&<p>{errors.pwd.message}</p>}
        <input type="submit" />
        </form>
    </div>
  )
}
