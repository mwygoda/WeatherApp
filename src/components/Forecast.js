import React, { Component } from 'react';
import Switch from 'react-bootstrap-switch';
import moment from 'moment';
import ForecastTable from './ForecastTable';
import './../styles/App.css';
import 'react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.css';
import { getForecastByName, getDailyForecastByName } from './../api/WeatherApi';
import Spinner from './Spinner';

class Forecast extends Component {
  state={
    info:"",
    infoDaily:"",
    fetching: false,
    checked: true,
    locationDaily:"",
    locationHourly:""
  }

  getForecast(e){
    e.preventDefault();
    if(this.state.checked === true)
    {
      return this.getHourlyForecast();
    }else {
      return this.getDailyForecast();
    }
  }

  getHourlyForecast(){
    let location = this.refs.location.value;

    this.setState({
      fetching: true
    });

    getForecastByName(location)
    .then((response) => {
      let data = response;
      this.setState({
        fetching: false,
        info: data,
        locationHourly: location
      });
      this.refs.location.value = null;
    })
    .catch((err) => {
      console.log(err);
      alert("Enter valid city name");
    });
  }

  getDailyForecast(){
    let location = this.refs.location.value;
    this.setState({
      fetching: true
    });

    getDailyForecastByName(location)
    .then((response) => {
      let data = response;
      this.setState({
        fetching: false,
        infoDaily: data,
        locationDaily: location
      });
      this.refs.location.value = null;
    })
    .catch((err) => {
      console.log(err);
      alert("Enter valid city name")
    });
  }

  renderTable(){
    const { info } = this.state;
    if(info !== ""){
      let rain;
      const numbers = [0, 1, 2, 3, 4, 5];

      const listItems = numbers.map((number,data) =>{
        data = info.list[number];

        if(typeof data.rain !== "undefined" && data.rain['3h']){
          rain = data.rain['3h'].toFixed(2);
        }else{
          rain = 0;
        }

        return (
          <div>
            <br />
            <ForecastTable
              key={number}
              date={data.dt_txt}
              desc={data.weather[0].description}
              icon={"http://openweathermap.org/img/w/"+data.weather[0].icon + ".png"}
              temp={data.main.temp}
              tmin={data.main.temp_min}
              wind={data.wind.speed}
              clouds={data.clouds.all}
              humidity={data.main.humidity}
              rain={rain+"mm/1h"}
              pressure={data.main.pressure}
            />
        </div>
        )
      });
      return (
        <div>
          {listItems}
        </div>
      );
    }
  }

  renderDailyTable(){
    const { infoDaily } = this.state;
    if(infoDaily !== ""){
      let rain;
      const numbers = [0, 1, 2, 3, 4, 5];

      const listItems = numbers.map((number,data) =>{
        data = infoDaily.list[number];
        if(typeof data.rain !== "undefined" ){
          rain = data.rain.toPrecision(2);
        }else{
          rain = 0;
        }
        return (
          <div>
            <br />
            <ForecastTable
              key={number}
              date={moment().add(number, 'days').format("DD MMM YYYY")}
              desc={data.weather[0].description}
              icon={"http://openweathermap.org/img/w/"+data.weather[0].icon + ".png"}
              temp={data.temp.max}
              tmin={data.temp.min}
              wind={data.speed}
              clouds={data.clouds}
              humidity={data.humidity}
              rain={rain+"mm/12h"}
              pressure={data.pressure}
            />
        </div>
        )
      });
      return (
        <div>
          {listItems}
        </div>
      )
    }
  }

  renderSpinner(){
    if(this.state.fetching){
      return (
        <div className="Spinner">
          <Spinner type='spin' color='#FF0FF' left='50%' />
        </div>
      );
    }
  }

  handleSwitch(e) {
  this.setState({
   checked: e.state.value
 });
}

  renderContent(){
    const { checked, locationHourly, locationDaily } = this.state;
    if(checked === true){
      return (
        <div>
          <h2 className="bolder tempText text-center">{locationHourly}</h2>
          {this.renderTable()}
        </div>
      );
    }else{
      return (
        <div>
          <h2 className="bolder tempText text-center">{locationDaily}</h2>
          {this.renderDailyTable()}
        </div>
      );
    }
  }

  render(){
    let header = "Weather forecast";

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 ">
            <div className="switchForecast tempText">
              <Switch
                onText="hourly"
                offText="daily"
                offColor="success"
                onColor="info"
                onChange={this.handleSwitch.bind(this)}
                 />
            </div>
            <h2 className="bolder tempText text-center">{header}</h2>
              <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                <form className="form-vertical" onSubmit={this.getForecast.bind(this)}>
                  <input style={{marginBottom: "2rem"}} className="text-center tempText form-control" type="search" ref="location" placeholder="Enter the name of the city"/>
                </form>
              </div>
              <div className="col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1">
                {this.renderContent()}
                <div className="Spinner">
                  {this.renderSpinner()}
                </div>
              </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Forecast;
