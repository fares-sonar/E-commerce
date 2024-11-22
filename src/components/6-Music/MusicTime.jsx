const times = [
  {hours:"23", text:"Hours" },
  {hours:"05", text:"Days" },
  {hours:"59", text:"Minutes" },
  {hours:"35", text:"Secondes" },
]
function MusicTime() {
  return (
    <>
    {times.map((time)=>(
      <div key={time.text} className="flex flex-col justify-center items-center  bg-white text-black w-[62px] h-[62px] rounded-full">
        <h3 className="font-semibold">{time.hours}</h3>
        <span className="text-[11px] font-normal">{time.text}</span>
      </div>
    ))}
    </>
  )
}

export default MusicTime