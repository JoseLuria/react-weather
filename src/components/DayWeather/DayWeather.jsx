const DayWeather = ({min, max, image, units}) => {
  return (
    <div className="bg-dark-blue flex flex-col items-center p-4 w-[130px] text-white rounded">
      <h3 className="py-2">Weather</h3>
      <img className="w-[56px] mb-[1rem]" src={image} alt=""/>
      <p className="w-full flex justify-between text-[0.8rem]">{max}{units?"°C":"°F"}<span className="text-gray ml-[10px]">{min}{units?"°C":"°F"}</span></p>
    </div>
  )
}

export default DayWeather
