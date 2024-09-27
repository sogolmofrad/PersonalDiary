function SingleDiary({ headline, mood, weather, src, thoughts, date }) {
  const weatherColor = weather.split("#")[1]; // Handling the weather color
  return (
    <div className="w-full h-[90vh] bg-white flex justify-between items-center">
      <div className="w-[70%] text-center flex flex-col gap-3 p-[3rem]">
        <h2 className="text-[2.4rem] ">{headline}</h2>
        <p>{date}</p>
        <div className="flex mx-auto items-center gap-[3rem]">
          <p className="inline-block text-[2.4rem]">{mood}</p>
          <div
            className={`w-[2.4rem] h-[2.4rem] rounded-full`}
            style={{ background: `#${weatherColor}` }}
          ></div>
        </div>
        <p className="w-[60%] mx-auto text-justify text-[1.6rem]">{thoughts}</p>
      </div>
      <img
        src="images/border-image-vertical.png"
        alt="border-right"
        className="h-full"
      />
      <div className="p-[5rem] w-[40%]">
        <img src={src} alt={headline} className="h-[60%]" />
      </div>
    </div>
  );
}

export default SingleDiary;
