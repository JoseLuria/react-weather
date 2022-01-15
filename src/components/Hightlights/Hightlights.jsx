const Hightlights = ({title, number, units, metric, imperial, general}) => {
  return (
    <div className="w-full max-w-[340px] text-center bg-dark-blue p-[1.2rem] text-white rounded">
      <p>{title}</p>
      <p><span className="text-[3rem] font-bold">{number}</span>{units?metric:imperial}{general}</p>
    </div>
  )
}

export default Hightlights
