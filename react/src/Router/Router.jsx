import React from 'react'
import { Link } from 'react-router-dom'



export const Router = () => {
  return (
    <div>
        <Link to="/about">About</Link><br />
        <Link to="/service">Service</Link>
    </div>
  )
}
