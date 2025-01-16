import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

const ShortenLink = (props: Props) => {

  const [link, setLink] = useState<string>('') // State for the input value
  const [shortenedLink, setShortenedLink] = useState<string | null>(null) // State for the shortened URL
  console.log(shortenedLink)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const API_KEY = import.meta.env.VITE_BITLY_API_KEY


  // Function to hanle API call
  const shortenLink = async () => {
    if (!link) {
      setError('Please add a link')
      return
    }

    try {
      setError(null)
      setLoading(true)

      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: link,
          domain: 'bit.ly'
        },
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )

      setShortenedLink(response.data.link)
      setLink('')
    } catch (err) {
      setError('Failed to shorten the link. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col gap-4 p-6 mx-6 bg-darkByzantineBlue bg-shorten-mobile bg-no-repeat bg-right-top rounded-[10px] absolute -top-[80px] left-0 right-0 lg:px-[64px] lg:py-[52px] lg:flex-row lg:gap-6 lg:mx-[165px]  lg:bg-shorten-desktop'>
        <input 
        className={`text-peacoat font-medium leading-9 tracking-[.12px] py-[6px] pl-4 rounded-md lg:text-[20px] lg:tracking-[.15px] lg:w-4/5 lg:py-[14px] lg:pl-8 lg:rounded-[10px] focus:outline-none ${error && 'border-[3px] border-red-500 placeholder-red-500/50'}`}
        type="url" 
        placeholder='Shorten a link here...'
        value={link} 
        onChange={(e) => setLink(e.target.value)}
        required/>
        {error && <p className='text-red-500 text-[12px] leading-3 font-medium tracking-[.082px] italic -mt-1'>{error}</p>}
        <button 
        className='text-[18px] text-white font-bold bg-darkTurquoise py-[10px] px-6 rounded-md lg:w-1/5 lg:text-[20px] lg:rounded-[10px] hover:bg-opacity-50 transition ease-in-out duration-300'
        onClick={shortenLink}
        disabled={loading} // Disable button while loading
        >{loading ? 'Shortening...' : 'Shorten it!'}
        </button>
      </div>

      {shortenedLink && (
        <div className='bg-slate-600 p-4 rounded-md'>
          <a className='text-darkTurquoise font-medium leading-9 tracking-[.12px]' href={shortenedLink} target='_blank' rel='noopener noreferrer'>{shortenedLink}</a>
        </div>
      )}
    </>

    
  )
}

export default ShortenLink