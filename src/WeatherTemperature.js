import React, { useState } from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit]=useState("celsius");

    function showFahrenheit (event){event.preventDefault();
    setUnit ("fahrenheit");}

    function showCelsius (event){event.preventDefault();setUnit("celsius");}

    if (unit === "celsius"){
    return (<div className="WeatherTemperature">
        <big>
    <span className="temperature">{Math.round(props.celsius)}</span></big>
    <span className="unit">℃ |<a href="/" onClick={showFahrenheit}>℉</a></span>
</div>);}
else {let fahrenheit=(props.celsius *9)/5 +21;
    
    return (<div className="WeatherTemperature">
        <big>
<span className="temperature">{Math.round(fahrenheit)}</span></big>
<span className="unit"><a href="/" onClick={showCelsius}>℃</a>|℉</span>
</div>);}}