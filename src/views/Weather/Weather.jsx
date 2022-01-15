import SideBar from "../../components/SideBar/SideBar"
import WeekForecast from "../../components/WeekForecast/WeekForecast"
import MainSection from "../../components/MainSection/MainSection"
import Hightlights from "../../components/Hightlights/Hightlights"

const Weather = ({weatherDaily, data, handleMetric, units}) => {
  return (
    <div className="w-full flex flex-col bg-black lg:h-full lg:flex-row">
      <SideBar 
        units={units} 
        temp={data?.main?.temp} 
        status={data?.weather[0]?.description} 
        city={data?.name}
        image={data?.weather[0]?.icon}
      />
      <div className="w-full flex justify-center p-[2rem] items-center lg:w-[70%] lg:h-full">
        <div className="w-full flex flex-col gap-[2rem] lg:w-auto">
          <button onClick={handleMetric} className="text-black text-[1.2rem] w-[40px] h-[40px] font-bold rounded-full bg-[#E7E7EB]">{units?"°F":"°C"}</button>
          <WeekForecast weatherDaily={weatherDaily} units={units}/>
          <p className="text-white text-[1.5rem] font-bold">Today’s Hightlights</p>
          <MainSection>
            <Hightlights title={"Wind Speed"} number={data?.wind?.speed} units={units} metric={"m/s"} imperial={"mi/h"}/>
            <Hightlights title={"Pressure"} number={data?.main?.pressure} general={"hPa"}/>
            <Hightlights title={"Humidity"} number={data?.main?.humidity} general={"%"}/>
            <Hightlights title={"Clouds"} number={data?.clouds?.all}/>
          </MainSection>
        </div>
      </div>
    </div>
  )
}

export default Weather
