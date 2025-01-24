import React from 'react'

type Props = {}

const BoostYourLinks = (props: Props) => {
  return (
    <div className='bg-darkByzantineBlue py-[90px] px-[35px] bg-boost-mobile bg-no-repeat bg-cover flex flex-col items-center gap-4 lg:gap-8 lg:bg-boost-desktop lg:py-14'>
      <h3 className='text-[28px] text-white font-bold leading-[48px] -tracking-[.7px] lg:text-[40px] lg:-tracking-[1px]'>Boost your links today</h3>
      <button className='text-[20px] text-white  font-bold bg-darkTurquoise py-3 px-10 rounded-full hover:bg-opacity-50 transition ease-in-out duration-300'>Get Started</button>
    </div>
  )
} 
export default BoostYourLinks