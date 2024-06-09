import React from 'react'
import { Link } from 'react-router-dom'
export const Actorsdata = () => {
  return (
    <div>
        <h1>Actors Images!</h1>
        <Link to="/vijay">Vijay</Link><br />
        <Link to="/ajith">Ajith</Link><br />
        <Link to="/rajini">Rajini</Link>
    </div>
  )
}
