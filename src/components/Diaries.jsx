import { useState, useEffect } from "react";
import Diary from "./Diary";
import SingleDiary from "./SingleDiary";

function Diaries({ diaryUpdate }) {
  const [diaries, setDiaries] = useState([]);
  const [selectedDiary, setSelectedDiary] = useState(null); // State to store the clicked diary

  // Fetching data from localStorage
  useEffect(() => {
    const formData = localStorage.getItem("formData");
    setDiaries(formData ? JSON.parse(formData) : []);
  }, [diaryUpdate]); // Fetch new data whenever diaryUpdate changes

  const handleDiaryClick = (diary) => {
    setSelectedDiary(diary); // Set the selected diary for popup
  };

  const handleClose = () => {
    setSelectedDiary(null); // Clear the selected diary to close the popup
  };

  return (
    <div className="relative">
      {/* Diaries grid */}
      <div className="gallery px-[5rem] py-[2rem] w-[95%] grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-[1.5rem]">
        {diaries?.map((diary, i) => (
          <div
            key={i}
            onClick={() => handleDiaryClick(diary)}
            className={`gallery-item p-[7px] border-2 border-black`}
          >
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
