import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Github, Mail, Instagram, Linkedin } from 'lucide-react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/hemant482" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-navy-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hemantkumawat482@gmail.com" className="text-gray-600 hover:text-navy-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/hemant.kumawat__" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-navy-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hemant-kumawat-1b572927b" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-navy-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;