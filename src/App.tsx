import BoostYourLinks from './components/BoostYourLinks'
import FeaturesSection from './components/FeaturesSection'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto overflow-hidden'>
        <div className='lg:px-[165px]'>
          <Header />
          <Hero />
        </div>
        <FeaturesSection />
        <BoostYourLinks />
        <Footer />
      </div>
    </>
  )
}

export default App
