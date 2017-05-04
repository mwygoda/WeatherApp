import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
      <nav className="navApp navbar navbar-default">
        <div className="container-fluid">
          <div className="hidden-xs hidden-sm inputButton navbar-header">
            <a className="navbar-brand" href="/">
              <span className="cloudIcon glyphicon glyphicon-cloud"></span>
            </a>
          </div>
            <ul className="list-inline">
              <li className="hidden-sm hidden-xs">
                <h3 style={{marginRight: 10}} className="bolder tempText">React Weather App</h3>
              </li>
              <li className="navLinks active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navLinks active">
                <NavLink to="/forecast">Forecast</NavLink>
              </li>
              <li className="navLinks active">
                <NavLink to="/about">About</NavLink>
              </li>
                <li className="navLinks active navbar-right gitIcon">
                    <a target="_blank" href="https://github.com/mwygoda">
                        <img alt="git icon" height="22rem" src={require('../../public/git.ico')}  />
                    </a>
                </li>
            </ul>
          </div>
      </nav>
    );
}
export default Navbar;
