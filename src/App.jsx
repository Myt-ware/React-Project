import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home';
import About from './component/About'
import Services from './component/Services';
import Contact from './component/Contact';
import { Route, Routes } from 'react-router-dom';
import HomeNavBar from './component/HomeNavBar';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
  </>
  )
}

export default App
