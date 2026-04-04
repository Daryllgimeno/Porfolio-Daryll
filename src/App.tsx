import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App