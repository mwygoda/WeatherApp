import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';
import About from './components/About';
import Forecast from './components/Forecast';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Router>
    <div className="container">
      <Navbar/>
        <div className="test img-responsive">
          <Route exact path="/" component={App}/>
          <Route path="/forecast" component={Forecast}/>
          <Route path="/about" component={About}/>
        </div>
    </div>
  </Router>,
  document.getElementById('root')
);
