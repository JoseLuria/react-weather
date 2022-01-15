import { useState } from "react"
import axios from "axios"

const useFetch = () => {
  const [data, setData] = useState(undefined) 
  const [weatherDaily, setWeatherDaily] = useState(undefined)

  const handleFetch = (lat, lon, metric) => {
    setWeatherDaily(undefined)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${metric?"metric":"imperial"}&appid=${import.meta.env.VITE_API_KEY}`)
      .then(result => setData(result.data))
      .catch(error => console.log(error))
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${metric?"metric":"imperial"}&appid=${import.meta.env.VITE_API_KEY}`)
      .then(result => {
        const dailyForecast = result.data.daily
        const weekForecast = dailyForecast.slice(0, 5)
        setWeatherDaily(weekForecast)
        })
      .catch(error => console.log(error))   
  }

  return {data, weatherDaily, setData, handleFetch}
}

export default useFetch
