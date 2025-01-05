import React from 'react'

type isModalProps = {
  isModal?: boolean
}


const AuthButtons: React.FC<isModalProps> = ({isModal}) => {
  return (
    <div className={`${isModal&& 'flex flex-col gap-6'}`}>
      <button className={`${isModal ? 'text-[18px] text-white' : 'text-manatee hover:text-peacoat text-[15px]'} font-bold cursor-pointer transition ease-in-out duration-300`}>Login</button>
      <button className={`${isModal ? 'text-[18px]' : 'text-[15px]'} font-bold text-white bg-darkTurquoise py-2 px-6 rounded-full lg:ml-9 hover:bg-opacity-50 transition ease-in-out duration-300`}>Sign Up</button>
    </div>
  )
}

export default AuthButtons