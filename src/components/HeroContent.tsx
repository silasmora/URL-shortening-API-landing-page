import React from 'react'

type Props = {}

const HeroContent = (props: Props) => {
  return (
    <div className='mx-6 flex flex-col items-center gap-[15px]'>
      <h2 className='text-[42px] text-peacoat font-bold leading-[48px] -tracking-[1.05px] text-center'>More than just shorter links</h2>
      <p className='text-[18px] text-manatee font-medium leading-[30px] tracking-[.123px] text-center'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button className='text-[20px] text-white font-bold bg-darkTurquoise py-3 px-10 rounded-full mt-4'>Get Started</button>
    </div>
  )
}

export default HeroContent