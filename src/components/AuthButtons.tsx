import React from 'react'
import { NavLink } from 'react-router-dom'


const AuthButtons = () => {
  return (
    <div>
      <button className='text-manatee hover:text-peacoat text-[15px] font-bold cursor-pointer transition ease-in-out duration-300'>Login</button>
      <button className='text-white text-[15px] font-bold bg-darkTurquoise py-2 px-6 rounded-full lg:ml-9 hover:bg-opacity-50 transition ease-in-out duration-300'>Sign Up</button>
    </div>
  )
}

export default AuthButtons