import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
            <a className="navbar-brand name" href>Stephanie Chaparro-Roldan</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link px-4 texty" to="/">About Me</NavLink>
                <NavLink className="nav-item nav-link px-4 texty" to="/work">Work</NavLink>
                <NavLink className="nav-item nav-link px-4 texty" to="/contactme">Contact Me</NavLink>
                <NavLink className="nav-item nav-link px-4 texty" to="/resume">Resume</NavLink>
              </div>
            </div>
          </nav>
    </header>
      
    );
  };
  
  export default Header;