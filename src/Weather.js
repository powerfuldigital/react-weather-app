import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";


export default function Weather (props){
    const [weatherData, setWeatherData]= useState ({ready: false});
    const [city, setCity]= useState (props.defaultCity);
    function handleResponse(response){console.log(response.data);
    setWeatherData({ready:true,
    temperature: Math.round(response.data.main.temp),
humidity: Math.round(response.data.main.humidity),
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
icon: response.data.weather[0].icon,
wind: Math.round(response.data.wind.speed),
city:response.data.name,
tempHigh: Math.round(response.data.main.temp_max),
tempLow: Math.round(response.data.main.temp_min),});}

function search (){
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);}

function handleSubmit (event){event.preventDefault();
search(city);}

function handleCityChange (event) {setCity (event.target.value);}
    
  if (weatherData.ready) {
    return (
        <><div className="container backgroundTarget">
            <div className="weather-app-wrapper">
                <div className="weather-app">
                    <form onSubmit={handleSubmit} id="search-form" className="mb-3">
                        <div className="row">
                            <div className="col-9">
                                <input type="search" placeholder="Type a city..." className="form-control" id="city-input" onChange={handleCityChange} />
                            </div>
                            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" id="searchButton" /></div>
                        </div>
                    </form>
            <WeatherInfo data={weatherData}/>
            </div>
            </div>
        </div>
        <small> <a href="https://github.com/powerfuldigital/weather-app" target="_blank" rel="noopener noreferrer">Open-source code</a> by Powerful Digital</small></>);
          }

else {search();
  }

  return "Loading";
   }