import React, { useState, useEffect } from 'react'

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 0,
    rain: 0,
  })

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Miami,us&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )

      const resData = await res.json()
      const curTemp = resData.main.temp.toFixed(0)

      let curRain
      if (resData.rain === undefined) {
        curRain = 0
      } else {
        curRain = resData.rain['1h'].toFixed(1)
      }

      setWeather({ temp: curTemp, rain: curRain })
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className='weather-div'>
      <p>
        {weather.temp}&deg;<span>F</span>
      </p>
      <hr />
      <p>rain</p>
      <p>
        {weather.rain}
        <span>In.</span>
      </p>
    </div>
  )
}

export default Weather
