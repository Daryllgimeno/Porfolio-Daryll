import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer className="footer">
          © 2026 Daryll Gimeno. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
