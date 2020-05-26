import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 0,
    rain: 0,
  });

  const getWeather = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Miami,us&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );

    const resData = await res.json();
    console.log(resData);
    const curTemp = resData.main.temp.toFixed(0);
    const curRain = resData.rain['1h'].toFixed(1);
    setWeather({temp: curTemp, rain: curRain});
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className='weather-div'>
      <p>
        {weather.temp}&deg;<span>F</span>
      </p>
      <hr />
      <p>rain</p>
      <p>
        {weather.rain}<span>In.</span>
      </p>
    </div>
  );
};

export default Weather;
