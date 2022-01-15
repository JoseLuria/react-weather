import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"

const SideBar = ({temp, status, city, units, image}) => {
  return (
    <div className="w-full bg-dark-blue flex gap-[2rem] flex-col p-[2rem] items-center lg:justify-center lg:h-full lg:w-[30%]">
      <img className="w-[202px]" src={`/assets/${image}.svg`} alt=""/>
      <h1 className="text-[4rem] sm:text-[5rem] font-bold text-white">{temp}{units?"°C":"°F"}</h1>
      <p className="text-[2.5rem] font-semibold text-light-gray capitalize">{status}</p>
      <p className="text-light-gray">Today</p>
      <div className="flex items-center text-light-gray gap-[0.5rem]">
        <FontAwesomeIcon icon={faMapMarker}/>
        <p className="font-semibold">{city}</p>
      </div>
    </div>
  )
}

export default SideBar
