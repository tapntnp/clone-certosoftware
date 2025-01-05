import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeadSection from './components/HeadSection'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeadSection/>
      <MainSection/>
      <Footer/>
    </>
  )
}

export default App
