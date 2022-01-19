import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
              <div class="container-fluid">
                <NavLink to="/"><img src="../images/apple-touch-icon.png" class="logo" alt=""></img></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <NavLink to="/" activeClassName="active_styles" exact><li class="nav-item nav-link">Home</li></NavLink>
                      <NavLink to="/about" activeClassName="active_styles" exact><li class="nav-item nav-link">About</li></NavLink>
                      <NavLink to="/contact" activeClassName="active_styles" exact><li class="nav-item nav-link">Contact</li></NavLink>
                      <NavLink to="/services" activeClassName="active_styles" exact><li class="nav-item nav-link">Services</li></NavLink>
                  </ul>
                </div>
              </div>
            </nav>
            
            
        </div>
    )
}

export default Navbar
