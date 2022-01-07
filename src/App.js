import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="New York"/>
     </div>
    </div>
  );
}

export default App;
