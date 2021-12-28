import React from "react";

export default function Weather (){return (<body class="backgroundTarget">
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
              <h1 id="city"></h1>
              <span>Last updated: </span><p id="current-day-time"></p>
            </div>
            <div class="col-6">
              <div class="weather-temperature">
                <img src="" 
                alt="" 
                id="icon"
                />
                  <strong id="temperature"></strong><small><a href="#" id="celsius-link" class="active">ºC</a> |<a href="#" id="fahrenheit-link">ºF</a></small>
                  <div class="cityDescription" id="description"></div>
                </div>
              </div>
          </div>
        </div>
          <div id="weather-decription">
          <div class="row">
            <div class="col-3"><strong>High: </strong><span id="highTemp"></span>º</div>
            <div class="col-3"><strong>Low: </strong><span id="lowTemp"></span>º</div>
            <div class="col-3"><strong>Wind: </strong><span id="wind"></span>km/h</div>
            <div class="col-3"><strong>Humidity: </strong><span id="humidity"></span>%</div>
          </div>
        </div>
          <div id="weather-forecast">
              </div>
                </div>
                <small> <a href="https://github.com/powerfuldigital/weather-app" target="_blank">Open-source code</a> by Powerful Digital</small>
            </div>
          </div>
</body>);
   }