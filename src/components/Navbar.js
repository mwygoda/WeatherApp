import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <nav className="navApp navbar navbar-default">
        <div className="container-fluid">
          <div className="inputButton navbar-header">
            <a className="navbar-brand" href="#">
              <span className="cloudIcon glyphicon glyphicon-cloud"></span>
            </a>
          </div>
          <div className="collapse navbar-collapse">

            <ul className="list-inline">
              <li>
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
                    <a href="https://github.com/mwygoda">
                        <img alt ="git icon" border="0" height="22rem" src={require('../../public/git.ico')}  />
                    </a>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
