import DayWeather from "../DayWeather/DayWeather"

const WeekForecast = ({weatherDaily, units}) => {
  return (
    <div className="flex w-auto gap-[1rem] overflow-auto scrollbar-hide md:justify-center">
      {
        weatherDaily && weatherDaily.length > 0 && 
          weatherDaily.map((data, index) => 
            <DayWeather
              key={index} 
              min={data?.temp?.min} 
              max={data?.temp?.max} 
              image={`/assets/${data?.weather[0]?.icon}.svg`} 
              units={units}
            />
          )
      }
    </div>
  )
}

export default WeekForecast
