import axios from 'axios';

  export const getTempByName = (location) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&q='+location)
    .then((response) => {
      return {temp: response.data.main.temp, locationName: response.data.name, icon: response.data.weather[0].icon};
    })
    .catch((err) => {
      if(location!=="")
      {
        alert("Please type correct city name!");
        console.log(err);
      }
    });
  };

  export const getTempByGeo = (coords) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&lat='+coords.latitude+'&lon='+coords.longitude)
    .then((response) => {
      return {temp: response.data.main.temp, icon: response.data.weather[0].icon, locationName: response.data.name};
    })
    .catch((err) => {
      if(location!=="")
      {
        alert("cannot find your location!");
        console.log(err);
      }
    });
  };

export const getForecastByName = (location) => {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&q='+location)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    alert("Please type correct city name!");
    console.log(err);
  });
};
//forecast/daily?q=

export const getDailyForecastByName = (location) => {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric&q='+location)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    alert("Please type correct city name!");
    console.log(err);
  });
};
