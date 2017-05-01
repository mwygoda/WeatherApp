import React, { Component } from 'react';
import ForecastTable from './ForecastTable';
import { getForecastByName } from './../api/WeatherApi';

class Forecast extends Component {
  state={
    info:"",
    fetching: false
  }

  getHourlyForecast(e){
    e.preventDefault();
    let location = this.refs.location.value;

    this.setState({
      info: "",
      fetching: true
    });

    getForecastByName(location)
    .then( (response) => {
      let data = response;
      this.setState({
        fetching: true,
        info: data
      });
    })
    .catch( (err) => {
      console.log(err);
      alert("Enter valid city name");
    });
  }
  renderTable(){
    if(this.state.info !== ""){
      // let i = iterator;
      // if(typeof this.state.info.list[i].rain != "undefined"){
      //   rain = this.state.info.list[i].rain['3h'];
      // }else {
      //   rain ="0";
      // }
      let rain;
      const numbers = [0, 1, 2, 3, 4, 5,6,7,8,9,10];
      const listItems = numbers.map((number,data) =>{
        if(typeof this.state.info.list[number].rain !== "undefined"){
          if(rain = this.state.info.list[number].rain['3h'])
          {
            rain = this.state.info.list[number].rain['3h']
          }else{
            rain ="0";
          }
        }else {
          rain ="0";
        }
        data = this.state.info.list[number];
          return (
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
            rain={rain}
            pressure={data.main.pressure}
            />
        )
      });

      return (
        <div>
          {listItems}
        </div>
      )
      // return (
      //   <ForecastTable
      //     date={this.state.info.list[i].dt_txt}
      //     desc={this.state.info.list[i].weather[0].description}
      //     icon={"http://openweathermap.org/img/w/"+this.state.info.list[i].weather[0].icon + ".png"}
      //     temp={this.state.info.list[i].main.temp}
      //     tmin={this.state.info.list[i].main.temp_min}
      //     wind={this.state.info.list[i].wind.speed}
      //     clouds={this.state.info.list[i].clouds.all}
      //     humidity={this.state.info.list[i].main.humidity}
      //     rain={rain}
      //     pressure={this.state.info.list[i].main.pressure}
      //     />
      // );
    }
  }
  // renderContent(){
  //   const numbers = [1, 2, 3, 4, 5];
  //   const listItems = numbers.map((number) =>
  // this.renderTable(number)
  // }
              // {this.renderContent()}
  render(){
    let header = "Hourly forecast";

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2 className="bolder text-center">{header}</h2>
              <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                <form className="form-vertical" onSubmit={this.getHourlyForecast.bind(this)}>
                  <input style={{marginBottom: "2rem"}} className="text-center tempText form-control" type="search" ref="location" placeholder="Enter the name of the city"/>
                </form>
              </div>
              {this.renderTable()}
        </div>
      </div>
    </div>
    );
  }
}
export default Forecast;
