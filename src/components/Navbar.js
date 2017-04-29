import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/">Home</Link>
              </li>
              <li className="navLinks active">
                <Link to="/forecast">Forecast</Link>
              </li>
              <li className="navLinks active">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <div className="nav navbar-right">
              
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
