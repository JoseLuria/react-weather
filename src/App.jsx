import Weather from "./views/Weather/Weather"
import Location from "./views/Location/Location"
import useFetch from "./customHooks/useFetch/useFetch"
import {useEffect, useState} from "react"
import Div100vh from "react-div-100vh"

function App() {
  const {data, weatherDaily, setData, handleFetch } = useFetch()
  const [loader, setLoader] = useState(false)
  const [metric, setMetric] = useState(true)

  const handleGetLocation = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    if(lat && lon){
      setLoader(true)
      handleFetch(lat, lon, metric)
    }
  }

  const handleMetric = () => {
    setData([])
    setMetric(!metric)
  }

  const handleLocationError = () => {
    console.log("Location error") 
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGetLocation, handleLocationError)
  }, [metric])

  return (
    <Div100vh>
    { 
      data?.name && weatherDaily?.length > 0 ? 
        <Weather 
          weatherDaily={weatherDaily} 
          data={data} 
          handleMetric={handleMetric} 
          units={metric}
        /> : 
          <Location 
          loader={loader}
        />
    }
    </Div100vh>
  )
}

export default App
