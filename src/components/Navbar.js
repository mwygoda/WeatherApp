import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
      <nav className="navApp navbar navbar-default">
        <div className="container-fluid">
          <div className="inputButton navbar-header">
            <a className="navbar-brand" href="/">
              <span className="cloudIcon glyphicon glyphicon-cloud"></span>
            </a>
          </div>
          <div className="collapse navbar-collapse">

            <ul className=" list-inline">
              <li>
                <h3 style={{marginRight: 10}} className="visible-md-* bolder tempText">React Weather App</h3>
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
        </div>
      </nav>
    );
}
export default Navbar;
