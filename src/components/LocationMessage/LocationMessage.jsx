import {faMapMarked} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LocationMessage = () => {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon className="text-[200px] mb-[2.5rem]" icon={faMapMarked}/>
      <p className="w-full text-center font-bold max-w-[300px]">We need to know where you are to get The Weather of your current Location</p>
    </div>
  )
}

export default LocationMessage
