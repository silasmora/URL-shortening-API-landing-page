import React from 'react'

type Props = {}

const ShortenLink = (props: Props) => {

  fetch("")
  return (
    <div className='flex flex-col gap-4 p-6 mx-6 bg-darkByzantineBlue bg-shorten-mobile bg-no-repeat bg-right-top rounded-[10px] absolute -top-[80px] left-0 right-0 lg:px-[64px] lg:py-[52px] lg:flex-row lg:gap-6 lg:mx-[165px]  lg:bg-shorten-desktop'>
      <input className='text-peacoat font-medium leading-9 tracking-[.12px] py-[6px] pl-4 rounded-md lg:text-[20px] lg:tracking-[.15px] lg:w-4/5 lg:py-[14px] lg:pl-8 lg:rounded-[10px]' type="url" placeholder='Shorten a link here...' required/>
      <button className='text-[18px] text-white font-bold bg-darkTurquoise py-[10px] px-6 rounded-md lg:w-1/5 lg:text-[20px] lg:rounded-[10px] hover:bg-opacity-50 transition ease-in-out duration-300'>Shorten it!</button>
    </div>
  )
}

export default ShortenLink