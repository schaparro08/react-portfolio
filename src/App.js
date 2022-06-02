import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';
// import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';



import './App.css';

function App() {
  return (
   <div>
    {/* Wrap page elements in Router component to keep track of location state */}
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route 
              path="/" 
              element={<About />} 
            />
            {/* Define a route that will take in variable data */}
            <Route 
              path="/contactme" 
              element={<Contact />} 
            />

              <Route 
              path="/resume" 
              element={<Resume />} 
            />

              <Route 
              path="/work" 
              element={<Work />} 
            />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
