import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Vijay } from './Vijay'
import { Rajini } from './Rajini'
import { Ajith } from './Ajith'
import { Actorsdata } from './Actorsdata'
export const Routerdemo = () => {
  return (
    <div>
        <BrowserRouter>
        <Actorsdata/>
        <Routes>
            <Route path='/vijay'element={<Vijay/>}/>
            <Route path='/ajith'element={<Ajith/>}/>
            <Route path='/rajini'element={<Rajini/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
