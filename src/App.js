import React, { Component } from 'react';
import axios from 'axios';
import {geolocated} from 'react-geolocated';
import './styles/App.css';
import BubbleSpinner from './components/BubbleSpinner';

class App extends Component {

  state={
    temp: "",
    icon: ""
  };
  getCurrentTemp(event){
    event.preventDefault()

     var location = this.refs.location.value;

    axios.get('http://api.openweathermap.org/data/2.5/weather?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&q='+location)
    .then((response) => {
      this.setState({temp: response.data.main.temp, icon: response.data.weather[0].icon}, function() {
        console.log(response);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
  renderIcon(){
    var icon = 'http://openweathermap.org/img/w/' + this.state.icon + '.png';
    console.log(icon);
    if(this.state.icon !== "")
    {
        return (
          <div>
            <p className="tempText">
              and it's like
              <img height="100rem" color="pink" src={icon} />
            </p>
          </div>

    );
    }
        return "";
  }
  getCurrentTempByGeo(event) {
    event.preventDefault()
    console.log(this.props);
    if(this.props.coords !== null)
    {

        axios.get('http://api.openweathermap.org/data/2.5/weather?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&lat='+this.props.coords.latitude+'&lon='+this.props.coords.longitude)
        .then((response) => {
          this.setState({temp: response.data.main.temp, icon: response.data.weather[0].icon}, function() {
            console.log(response);
          })
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  }

  renderButton(){
    if(this.props.coords)
    {
      return(
        <form onSubmit={this.getCurrentTempByGeo.bind(this)}>
        <button className="transparentButton tempText btn btn-default btn-block">Check the weather in your location!</button>
      </form>
    );
  } else {
    return (
      <div className="Spinner">
      <BubbleSpinner/>
      </div>
    )
  }
  }
  renderTemp(){
    if(this.state.temp ==="")
    {
      return(
        <div className="inputButton">

        </div>
      );
    } else{
      return(
        <h2 className="tempText">
          It is {this.state.temp}°C there!
          {this.renderIcon()}
        </h2>
      );
    }
  }
  render() {
    return (
      <div className="App container full">
      <br />
      <br />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="">
              <div className="panel weatherForm  panel-primary">
                <div className="panel-header">
                  <h2 className="bolder tempText">Check the weather!</h2>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.getCurrentTemp.bind(this)}>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-3">
                        <input className="text-center tempText form-control" type="search" ref="location" placeholder="Enter the name of the city"/>
                            {this.renderTemp()}
                            {this.renderButton()}
                        </div>
                    </div>
                  </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(App);
