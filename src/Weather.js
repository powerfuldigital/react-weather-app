import React, { useState } from "react";
import axios from "axios";

export default function Weather (){
    const [weatherData, setWeatherData]= useState ({ready: false});
    function handleResponse(response){console.log(response.data);
    setWeatherData({ready:true,
    temperature: response.data.main.temp,
humidity: response.data.main.humidity,
date:"Wednesday 07:00",
description: response.data.weather[0].description,
iconUrl: "www.google.com",
wind: response.data.wind.speed,
city:response.data.name});}
    
  if (weatherData.ready) {
    return (<body class="backgroundTarget">
<div class="container">
  <div class="weather-app-wrapper">
      <div class="weather-app">
          <form id="search-form" class="mb-3">
              <div class="row">
                  <div class="col-9">
                      <input type="search" placeholder="Type a city..." class="form-control" id="city-input"/>
                  </div>
                  <div class="col-3"><input type="submit" value="Search" class="btn btn-primary w-100" id="searchButton"/></div>
              </div>
          </form>
          <div id="current-weather">
          <div class="row">
            <div class="col-6">
              <h1 id="city">{weatherData.city}</h1>
              <span>Last updated:{weatherData.date} </span><p id="current-day-time"></p>
            </div>
            <div class="col-6">
              <div class="weather-temperature">
                <img src="{weatherData.iconUrl}"
                alt={weatherData.description} 
                id="icon"
                />
                  <strong id="temperature">{weatherData.temperature}</strong><small><p id="celsius-link" class="active">ºC</p> |<p id="fahrenheit-link">ºF</p></small>
                  <div class="cityDescription" id="description">{weatherData.description}</div>
                </div>
              </div>
          </div>
        </div>
          <div id="weather-decription">
          <div class="row">
            <div class="col-3"><strong>High: </strong><span id="highTemp"></span>º</div>
            <div class="col-3"><strong>Low: </strong><span id="lowTemp"></span>º</div>
            <div class="col-3"><strong>Wind:{weatherData.wind} </strong><span id="wind"></span>km/h</div>
            <div class="col-3"><strong>Humidity:{weatherData.humidity} </strong><span id="humidity"></span>%</div>
          </div>
        </div>
          <div id="weather-forecast">
              </div>
                </div>
                <small> <a href="https://github.com/powerfuldigital/weather-app" target="_blank" rel="noopener noreferrer">Open-source code</a> by Powerful Digital</small>
            </div>
          </div>
</body>);}

else {
    let city= "Canberra";
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
   }