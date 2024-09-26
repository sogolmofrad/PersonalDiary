import { useState, useEffect } from "react";
import Diary from "./Diary";

function Diaries() {
  const [diaries, setDiaries] = useState([]);

  useEffect(
    function () {
      const formData = localStorage.getItem("formData");
      setDiaries(formData);
    },
    [diaries]
  );

  return (
    <div className="gallery w-[95%] grid md:grid-cols-6 md:grid-rows-7 gap-[1.5rem]">
      {diaries?.map((diary, i) => (
        <Diary
          key={i}
          src={diary.picture}
          alt={diary.title}
          className={`grid-item-${i + 1}`}
        />
      ))}
    </div>
  );
}

export default Diaries;
