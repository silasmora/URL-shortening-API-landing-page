import React from 'react'
import { NavLink } from 'react-router-dom'

type NavigationLink = {
  text: string,
  route: string,
}

type NavBarProps = {
  isModal?: boolean
}

const navigationLinks: NavigationLink[] = [
  {text: 'Features', route: '/features'},
  {text: 'Pricing', route: '/pricing'},
  {text: 'Resources', route: '/resources'},
]

const Navbar: React.FC<NavBarProps> = ({isModal}) => {
  return (
    <div className={`${isModal&& 'flex-col text-center'} flex gap-7`}>
      {navigationLinks.map((link, idx) => (
        <ul key={idx} className=''>
          <NavLink to={link.route} className={`${isModal ? 'text-[18px] text-white' : 'text-manatee hover:text-peacoat text-[15px]'} font-bold cursor-pointer transition ease-in-out duration-300`}>
            {link.text}
          </NavLink>
        </ul>
      ))}
    </div>
  )
}

export default Navbar