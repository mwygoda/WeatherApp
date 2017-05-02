import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import './styles/App.css';
import Spinner from './components/Spinner';
import WeatherMessage from './components/WeatherMessage';
import { getTempByGeo, getTempByName } from './api/WeatherApi';

class App extends Component {

  state={
    temp: "",
    icon: "",
    locationName: "",
    fetching: ""
  };
  getCurrentTemp(event){
    event.preventDefault();

     let location = this.refs.location.value;
     this.setState({
       isFetching: true
     });
      getTempByName(location).then( ({temp,icon, locationName}) => {
       this.setState({
         temp,
         icon,
         locationName: location,
         isFetching: true
       });
     })
     .catch( () => {
       alert("type correct city");
     });
  }

  getCurrentTempByGeo(event) {
    event.preventDefault();
    if(this.props.coords !== null)
    {
      getTempByGeo(this.props.coords)
      .then( ({temp,icon, locationName}) => {
        this.setState({
          temp,
          icon,
          locationName
        });
      })
      .catch( (err) => {
        alert("Cannot find your location!");
        console.log(err);
      });
    }
  }

  renderButton(){
    if(this.props.coords)
    {
      return(
        <button className="transparentButton tempText btn btn-default btn-block" onClick={this.getCurrentTempByGeo.bind(this)}>Check the weather in your location!</button>
    );
  } else {
    return (
      <div className="Spinner">
        <Spinner type='bubbles' color='#FF0FF' left='50%' />
      </div>
    );
  }
  }
  renderTemp(){
    if(this.state.temp ==="")
    {
      if (this.state.isFetching === true) {
        return(
          <div className="Spinner">
            <Spinner type='spin' color='#FF0FF' left='50%' />
          </div>
        );
      }else{
        return(
          <div className="inputButton"/>
        );
      }
    }
    else{
      return(
        <WeatherMessage icon={this.state.icon} temp={this.state.temp} locationName={this.state.locationName} />
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
              <div className="panel weatherForm  panel-primary">
                  <h2 className="bolder tempText">Check the weather!</h2>
                <div className="panel-body">
                  <form className="form-vertical" onSubmit={this.getCurrentTemp.bind(this)}>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                        <input className="text-center tempText form-control" type="search" ref="location" placeholder="Enter the name of the city"/>
                            {this.renderTemp()}
                        </div>
                    </div>
                  </form>
                  <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                   {this.renderButton()}
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
