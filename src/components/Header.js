import React from 'react';

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
            <a className="navbar-brand name" href="#">Stephanie Chaparro-Roldan</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link px-4 texty" to="/">About Me</a>
                <a className="nav-item nav-link px-4 texty" to="/work">Work</a>
                <a className="nav-item nav-link px-4 texty" to="/contactme">Contact Me</a>
                <a className="nav-item nav-link px-4 texty" to="/resume">Resume</a>
              </div>
            </div>
          </nav>
    </header>
      
    );
  };
  
  export default Header;