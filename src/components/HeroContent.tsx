import React from 'react'

type Props = {}

const HeroContent = (props: Props) => {
  return (
    <div className='mx-6 flex flex-col items-center gap-[15px] lg:mx-0 lg:items-start lg:max-w-[564px] lg:gap-[5px] lg:mt-[60px]'>
      <h2 className='text-[42px] text-peacoat font-bold text-center leading-[48px] -tracking-[1.05px] lg:text-[80px] lg:leading-[90px] lg:-tracking-[2px] lg:text-left'>More than just shorter links</h2>
      <p className='text-[18px] text-manatee font-medium text-center leading-[30px] tracking-[.123px] lg:text-[22px] lg:leading-9 lg:tracking-[.15px] lg:text-left'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button className='text-[20px] text-white font-bold bg-darkTurquoise py-3 px-10 rounded-full mt-4 hover:bg-opacity-50 transition ease-in-out duration-300 lg:mt-[26px]'>Get Started</button>
    </div>
  )
}

export default HeroContent