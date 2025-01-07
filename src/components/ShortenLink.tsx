import React from 'react'

type Props = {}

const ShortenLink = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 p-6 mx-6 bg-oldHeliotrope rounded-[10px] absolute -top-[80px] left-0 right-0 '>
      <input className='text-peacoat font-medium leading-9 tracking-[.12px] py-[6px] pl-4 rounded-md' type="url" placeholder='Shorten a link here...' required/>
      <button className='text-[18px] text-white font-bold bg-darkTurquoise py-[10px] px-6 rounded-md'>Shorten it!</button>
    </div>
  )
}

export default ShortenLink