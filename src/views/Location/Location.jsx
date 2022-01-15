import LocationMessage from "../../components/LocationMessage/LocationMessage"
import Loader from "../../components/Loader/Loader"

const Location = ({loader}) => {
  return (
    <div className="w-full p-[1rem] flex bg-[#ECEFF4] text-[#4C566A] justify-center items-center h-full">
      {loader ? <Loader/> : <LocationMessage/>}
    </div>
  )
}

export default Location
