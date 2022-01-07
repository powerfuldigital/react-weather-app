import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {return (
<div className="WeatherInfo">
    <div id="current-weather">
<div className="row">
  <div className="col-6">
      <h1 id="city">{props.data.city}</h1>
    <span>Last updated:<FormattedDate date={props.data.date}/> </span><p id="current-day-time"></p>
  </div>
  <div className="col-6">
    <div className="weather-temperature">
        <div className="float-left">
        <WeatherIcon code={props.data.icon}/>
        </div>
      </div>
        <WeatherTemperature celsius={props.data.temperature}/>
        <div className="cityDescription" id="description">{props.data.description}</div>
  
      </div>
    </div>
</div>
<div id="weather-decription">
<div className="row">
  <div className="col-3"><strong>High: </strong><span id="highTemp">{props.data.tempHigh}</span>º</div>
  <div className="col-3"><strong>Low: </strong><span id="lowTemp">{props.data.tempLow}</span>º</div>
  <div className="col-3"><strong>Wind: </strong><span id="wind">{props.data.wind}</span>km/h</div>
  <div className="col-3"><strong>Humidity: </strong><span id="humidity">{props.data.humidity}</span>%</div>
</div>
</div>
<div id="weather-forecast">
    </div>
      </div>
     );}