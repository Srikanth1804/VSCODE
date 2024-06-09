import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Service } from './Service'
import { Router } from './Router'
export const RouterData = () => {
  return (
    <div>
        <BrowserRouter>

<Router/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
