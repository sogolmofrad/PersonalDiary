import { useState, useEffect } from "react";
import Diary from "./Diary";

function Diaries({ diaryUpdate }) {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    setDiaries(formData ? JSON.parse(formData) : []);
  }, [diaryUpdate]); // Fetch new data whenever diaryUpdate changes

  return (
    <div className="gallery w-[95%] grid md:grid-cols-6 md:grid-rows-7 gap-[1.5rem]">
      {diaries?.map((diary, i) => (
        <Diary
          key={i}
          src={diary.imageUrl} // Display the image URL from localStorage
          alt={diary.headline} // Display the headline as the alt text
          className={`grid-item-${i + 1}`}
        />
      ))}
    </div>
  );
}

export default Diaries;
