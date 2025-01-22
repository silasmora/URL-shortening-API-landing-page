import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

const ShortenLink = (props: Props) => {

  const [links, setLinks] = useState<{ original: string; shortened: string }[]>([]) // State for the input value
  console.log(links)
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const API_KEY = import.meta.env.VITE_TINY_URL_API_KEY
  // Function to hanle API call
  const shortenLink = async () => {
    if (!inputValue || !inputValue.startsWith('http')) {
      setError('Please add a link')
      return
    }
    setError(null)
    
    try {
      const response = await fetch('https://api.tinyurl.com/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON .stringify({ url: inputValue }),
      })

      const data = await response.json()

      if (response.ok) {
        setLinks((prevLinks) => [
          ...prevLinks,
          { original: inputValue, shortened: data.data.tiny_url}
        ])
        setInputValue('')
      } else {
        console.error(data)
      }
    } catch (error) {
      console.error('Error shortening Link:', error)
    }
  }

  return (
    <>
      <div className='flex flex-col gap-4 p-6 mx-6 bg-darkByzantineBlue bg-shorten-mobile bg-no-repeat bg-right-top rounded-[10px] absolute -top-[80px] left-0 right-0 lg:px-[64px] lg:py-[52px] lg:flex-row lg:gap-6 lg:mx-[165px]  lg:bg-shorten-desktop'>
        <input 
        className={`text-peacoat font-medium leading-9 tracking-[.12px] py-[6px] pl-4 rounded-md lg:text-[20px] lg:tracking-[.15px] lg:w-4/5 lg:py-[14px] lg:pl-8 lg:rounded-[10px] focus:outline-none relative ${error && 'ring ring-red-500 placeholder-red-500/50'}`}
        type="url" 
        placeholder='Shorten a link here...'
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        required/>
        {error && <span className='text-red-500 text-[12px] leading-3 font-medium tracking-[.082px] italic -mt-1 lg:absolute bottom-[20%]'>{error}</span>}
        <button 
        className='text-[18px] text-white font-bold bg-darkTurquoise py-[10px] px-6 rounded-md lg:w-1/5 lg:text-[20px] lg:rounded-[10px] hover:bg-opacity-50 transition ease-in-out duration-300'
        onClick={shortenLink}
        >Shorten it
        </button>
      </div>

      <div className='flex flex-col gap-7 -mt-[60px] lg:-mt-[108px] lg:gap-4'>
      {links.map((link, idx) => (
        <div key={idx} className='flex flex-col gap-[6px] p-8 mx-6 bg-white rounded-md break-words lg:mx-0 lg:flex-row lg:justify-between lg:items-center lg:py-4 lg:pl-8 lg:pr-6'>
          <p className='text-peacoat font-medium leading-9 tracking-[.12px'>{link.original}</p>
          <div className='bg-manatee/25 h-[1px] w-full lg:hidden'></div>
          <div className='lg:flex lg:gap-6 lg:items-center'>
            <a className='text-darkTurquoise font-medium leading-9 tracking-[.12px]' href={link.shortened} target='_blank' rel='noopener noreferrer'>{link.shortened}</a>
            <button 
              className={`text-white font-bold py-[10px] px-6 rounded-md mt-[2px] hover:bg-opacity-50 transition ease-in-out duration-300 w-full
                ${copiedIndex === idx ? 'bg-darkByzantineBlue' : 'bg-darkTurquoise hover:bg-opacity-50'}`}
              onClick={() => {
                navigator.clipboard.writeText(link.shortened)
                setCopiedIndex(idx)

                setTimeout(() => {
                  setCopiedIndex(null)
                }, 2000)
              }}
            >
              {copiedIndex === idx ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
      </div>
    </>

    
  )
}

export default ShortenLink