import React from 'react';
import './../styles/App.css';

 const ForecastTable = ({
   header,
   date,
   temp,
   icon,
   desc,
  tmin,
  wind,
  clouds,
  humidity,
  rain,
  pressure
        }) => {
  return(

      <table className="table table-condensed table-responive">
        <thead>
          <tr>
            <th className="bolder" style={{border: 0, fontSize: "1.75rem", paddingLeft: "4rem"}}>{date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "white"}}>
              <tr>
                <td>
                  <img style={{paddingLeft: "4rem", marginTop: "1rem"}} alt="weather icon" height="64" src={icon}/>
                  {temp}°C
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{marginLeft: "4rem",marginBottom: "2rem", color: "lightgrey"}}>
                    {desc}
                  </div>
                </td>
              </tr>
            </td>
            <td>
              <tr>
                <td>
                  <label className="tableCell">T.min: </label> {tmin}°C
                </td>
              </tr>
              <tr>
                <td>
                  <label className="tableCell">Wind: </label> {wind}km/h
                </td>
              </tr>
            </td>
            <td>
              <tr>
                <td>
                  <label className="tableCell">Clouds: </label> {clouds}%
                </td>
            </tr>
            <tr>
              <td>
                <label className="tableCell">Humidity: </label> {humidity}%
              </td>
            </tr>
              </td>
          <td>
            <tr>
              <td>
                <label className="tableCell">Rain: </label> {rain}
              </td>
            </tr>
            <tr>
              <td>
                <label className="tableCell">Pressure: </label> {pressure}hPa
              </td>
            </tr>
          </td>
          </tr>
        </tbody>
      </table>
  );
}
export default ForecastTable;
