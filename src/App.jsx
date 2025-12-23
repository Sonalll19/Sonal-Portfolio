import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certificates/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;