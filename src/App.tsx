import FeaturesSection from './components/FeaturesSection'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
      <div className='max-w-[1440px] mx-auto overflow-hidden'>
        <div className='lg:px-[165px]'>
          <Header />
          <Hero />
        </div>
        <FeaturesSection />
        
      </div>
    </>
  )
}

export default App
