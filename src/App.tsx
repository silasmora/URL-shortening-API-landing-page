import FeaturesSection from './components/FeaturesSection'
import Header from './components/Header'
import Hero from './components/Hero'
import ShortenLink from './components/ShortenLink'

function App() {
  

  return (
    <>
      <div className='max-w-[1440px] mx-auto lg:px-[165px] overflow-hidden'>
        <Header />
        <Hero />
        <FeaturesSection />
      </div>
    </>
  )
}

export default App
