import React, { Component } from 'react';

class WeatherMessage extends Component {

  renderIcon(){
    var icon = 'http://openweathermap.org/img/w/' + this.props.icon + '.png';
    console.log(icon);
    if(this.props.icon !== "")
    {
        return (
          <div>
            <p className="tempText">
              and it's like
              <img alt="weather Icon" height="100rem" color="pink" src={icon} />
            </p>
          </div>
    );
    }
        return "";
  }
  render() {
    return(
      <h2 className="tempText">
        It is {this.props.temp}°C in {this.props.locationName}!
        {this.renderIcon()}
      </h2>
    );
  }
}
export default WeatherMessage;
