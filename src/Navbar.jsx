import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Navigation</h1>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/About"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/Login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red":""}}to="/Contact"><li>Conatct us</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar