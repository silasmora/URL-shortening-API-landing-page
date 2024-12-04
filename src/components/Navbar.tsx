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
  {text: 'Login', route: '/login'},
  {text: 'Sign Up', route: '/signup'}
]

const Navbar = () => {
  return (
    <div>
      {navigationLinks.map((link, idx) => (
        <ul key={idx}>
          <NavLink to={link.route}>
            {link.text}
          </NavLink>
        </ul>
      ))}
    </div>
  )
}

export default Navbar