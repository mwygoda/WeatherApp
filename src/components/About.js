import React from 'react';

const About = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>About</h1>
          <p>Simple weather application</p>
          <p className="bolder">Functions</p>
          <ul>
            <li>Checking weather by city name</li>
            <li>Checking weather by current location</li>
            <li>Hourly forecast by city name</li>
            <li>Daily forecast by city name</li>
          </ul>
          <p className="bolder">Here are some tools I used:</p>
          <ul>
            <li><a href="https://facebook.github.io/react">React</a></li>
            <li><a href="http://getbootstrap.com/">Twitter Bootstrap</a></li>
            <li><a href="https://www.npmjs.com/package/react-geolocated">React Geolocated for check current location</a></li>
            <li><a href="https://openweathermap.org/api">open weather map to get forecast</a></li>
          </ul>
          <p><a href="https://github.com/mwygoda/WeatherApp">application code</a> -
            whole code available here</p>
        </div>
      </div>
    </div>
  );
};
export default About;
