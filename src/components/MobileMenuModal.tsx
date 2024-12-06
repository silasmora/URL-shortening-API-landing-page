import React from 'react'
import AuthButtons from './AuthButtons'
import Navbar from './Navbar'


const MobileMenuModal = () => {
  return (
    <div>
      <div className='bg-darkByzantineBlue mx-6 px-6 rounded-[10px] h-[383px] flex flex-col items-center'>
        <div>
          <Navbar isModal={true}/>
        </div>
        <div className='w-full border-1 border-manatee mx-6'/>
        <div className='w-full justify-self-start'>
          <AuthButtons isModal={true}/>
        </div>
      </div>
    </div>
  )
}

export default MobileMenuModal