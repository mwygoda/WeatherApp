import React from 'react';

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
            <th className="bolder" style={{border: 0, paddingLeft: "4rem"}}>{date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "white"}}>
              <tr>
                <td>
                  <img style={{marginLeft: "2rem"}} height="64"src={icon}/>
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
                  <label style={{marginTop: "2rem"}}>T.min: </label> {tmin}°C
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{marginTop: "2rem"}}>Wind: </label> {wind}km/h
                </td>
              </tr>
            </td>
            <td>
              <tr>
                <td>
                  <label style={{marginTop: "2rem"}}>Clouds: </label> {clouds}%
                </td>
            </tr>
            <tr>
              <td>
                <label style={{marginTop: "2rem"}}>Humidity: </label> {humidity}%
              </td>
            </tr>
              </td>
          <td>
            <tr>
              <td>
                <label style={{marginTop: "2rem"}}>Rain: </label> {rain}mm/1h
              </td>
            </tr>
            <tr>
              <td>
                <label style={{marginTop: "2rem"}}>Pressure: </label> {pressure}hPa
              </td>
            </tr>
          </td>
          </tr>
        </tbody>
      </table>
  );
}
export default ForecastTable;
