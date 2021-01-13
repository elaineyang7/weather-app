import React from "react";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="card">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        <h2 className="py-2">{props.temp_celsius}&deg;</h2>

        {/** show max and min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h3 className="py-4">{props.description}</h3>

      </div>
    </div>
  );
}


function minmaxTemp(min, max) {
  return (
    <h4>
      <span className="px-4">H: { min }&deg;</span>
      <span className="px-4">L: { max }&deg;</span>
    </h4>
  )
}

export default Weather;