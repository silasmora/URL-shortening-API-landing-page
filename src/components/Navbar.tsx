import React from 'react'
import { NavLink } from 'react-router-dom'

type NavigationLink = {
  text: string,
  route: string,
}

const navigationLinks: NavigationLink[] = [
  {text: 'Features', route: '/'},
  {text: 'Pricing', route: '/pricing'},
  {text: 'Resources', route: '/resources'},
]

const Navbar = () => {
  return (
    <div className='flex gap-7'>
      {navigationLinks.map((link, idx) => (
        <ul key={idx} className=''>
          <NavLink to={link.route} className='text-manatee hover:text-peacoat text-[15px] font-bold cursor-pointer transition ease-in-out duration-300'>
            {link.text}
          </NavLink>
        </ul>
      ))}
    </div>
  )
}

export default Navbar