import React from 'react'
import './WeatherApp.css'

import search_icon from '../../images/search.png'
import clear_icon from '../../images/clear.png'
import cloud_icon from '../../images/cloud.png'
import drizzle_icon from '../../images/drizzle.png'
import humidity_icon from '../../images/humidity.png'
import rain_icon from '../../images/rain.png'
import snow_icon from '../../images/snow.png'
import wind_icon from '../../images/wind.png'

export const WeatherApp = () => {
  
  let api_key = "c5b583e19416405ea7b175751230409"
  const search =  async () => {  
    const searchInput = document.getElementsByClassName('cityInput');
    if (searchInput[0].value === "") {
      return 0;
    }
    let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${searchInput[0].value}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName('humidity-percent')
    const wind = document.getElementsByClassName('wind-rate')
    const temperature = document.getElementsByClassName('weather-temp')
    const location = document.getElementsByClassName('weather-location')

    humidity[0].innerHTML = data.current.humidity;
    wind[0].innerHTML = data.current.wind_kph;
    temperature[0].innerHTML = data.current.temp_c;
    location[0].innerHTML = data.location.name;  
  }   
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon">
          <img src={search_icon} alt="" onClick={() => {search()}} />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">21°c</div>
      <div className="weather-location">Auckland</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">65%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;
