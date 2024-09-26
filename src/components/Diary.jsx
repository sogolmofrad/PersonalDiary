function Diary({ src, headline, mood, weather, thoughts, date, className }) {
  console.log(headline, mood, weather, thoughts, date);
  let gridClass = "";
  if (className === "grid-item-1") {
    gridClass = "row-start-1 row-span-3 col-start-1 col-span-2";
  }
  if (className === "grid-item-2") {
    gridClass = "row-start-4 row-span-4 col-start-1 col-span-2";
  }
  if (className === "grid-item-3") {
    gridClass = "row-start-1 row-span-2";
  }
  if (className === "grid-item-4") {
    gridClass = "row-start-3 row-span-3";
  }
  if (className === "grid-item-5") {
    gridClass = "row-start-6 row-span-2";
  }
  if (className === "grid-item-6") {
    gridClass = "row-start-1 row-span-3 col-start-4 col-span-3";
  }
  if (className === "grid-item-7") {
    gridClass = "row-start-4 row-span-2 col-start-4 col-span-3";
  }
  if (className === "grid-item-8") {
    gridClass = "row-start-6 row-span-2 col-start-4 col-span-3";
  }

  return (
    <figure
      className={`gallery-item ${gridClass} p-[7px] border-2 border-black`}
    >
      <img
        src={src}
        alt={headline}
        className="w-full h-full object-cover block"
      />
    </figure>
  );
}

export default Diary;
