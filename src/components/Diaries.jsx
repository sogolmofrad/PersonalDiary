import { useState, useEffect } from "react";
import Diary from "./Diary";
import SingleDiary from "./SingleDiary";

function Diaries() {
  const [diaries, setDiaries] = useState([]);
  const [selectedDiary, setSelectedDiary] = useState(null); // State to store the clicked diary

  // Fetching data from localStorage
  useEffect(() => {
    const formData = localStorage.getItem("formData");
    setDiaries(formData ? JSON.parse(formData) : []);
  }, []);

  const handleDiaryClick = (diary) => {
    setSelectedDiary(diary); // Set the selected diary for popup
  };

  const handleClose = () => {
    setSelectedDiary(null); // Clear the selected diary to close the popup
  };

  return (
    <div className="relative">
      {/* Diaries grid */}
      <div className="gallery w-[95%] grid md:grid-cols-6 md:grid-rows-7 gap-[1.5rem]">
        {diaries?.map((diary, i) => (
          <div key={i} onClick={() => handleDiaryClick(diary)}>
            <Diary
              src={diary.imageUrl}
              headline={diary.headline}
              mood={diary.mood}
              weather={diary.weather}
              thoughts={diary.thoughts}
              date={diary.timestamp}
              className={`grid-item-${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* SingleDiary popup */}
      {selectedDiary && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative w-[80%] bg-white p-5 rounded-lg">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-xl text-black"
            >
              X
            </button>
            <SingleDiary
              headline={selectedDiary.headline}
              mood={selectedDiary.mood}
              weather={selectedDiary.weather}
              src={selectedDiary.imageUrl}
              thoughts={selectedDiary.thoughts}
              date={selectedDiary.timestamp}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Diaries;
