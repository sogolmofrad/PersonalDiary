import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [id, setId] = useState(() => {
    const storedId = localStorage.getItem("currentId");
    return storedId ? parseInt(storedId, 10) : 0;
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const [formData, setFormData] = useState({
    id: "",
    headline: "",
    mood: "",
    weather: "",
    imageUrl: "",
    thoughts: "",
    timestamp: new Date().toISOString().split("T")[0],
  });

  const [imagePreview, setImagePreview] = useState(null); // Preview the image

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the uploaded image
      setFormData({
        ...formData,
        imageUrl,
      });
      setImagePreview(imageUrl); // Set image preview
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      id: id,
    };

    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    const newData = [updatedFormData, ...existingData];
    localStorage.setItem("formData", JSON.stringify(newData));

    console.log("Form submitted:", formData);
    const newId = id + 1;
    localStorage.setItem("currentId", newId);
    setId(newId);
    onFormSubmit();
    setIsModalOpen(false);
  };

  return (
    <>
      <input
        type="checkbox"
        id="formModal"
        className="modal-toggle"
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div
        className="formContainer modal w-[70%] h-[70%] p-[2rem] flex flex-col gap-3 justify-center items-centermx-auto my-[10rem] mx-auto"
        role="dialog"
      >
        <h1 className="text-[3.6rem]">Let’s Get Those Thoughts Flowing!</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap flex-col text-[2.4rem] gap-12 w-[40%] mt-[2rem]"
        >
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            required
            placeholder="What is going on?"
            className="text-[1.8rem] text-black border-t-2 border-b-2 border-black"
          />

          <select
            name="mood"
            id="mood"
            value={formData.mood}
            onChange={handleChange}
            required
            className="text-[1.8rem] text-black border-t-2 border-b-2 border-black"
          >
            <option value="">How is your mood?</option>
            <option value="😊">😊Happy</option>
            <option value="😢">😢Sad</option>
            <option value="😠">😠Angry</option>
            <option value="😞">😞Depressed</option>
            <option value="😋">😋Hungry</option>
          </select>

          <input
            type="color"
            name="weather"
            id="weather"
            value={formData.weather || "#89CFF1"}
            onChange={handleChange}
            required
            list="presets"
            placeholder="How is the weather?"
            className="bg-white w-full text-[1.8rem] text-black border-t-2 border-b-2 border-black"
          />

          <input
            type="file"
            accept="image/*"
            name="imageUrl"
            onChange={handleImageUpload} // Handle image file upload
            required
            className="text-[1.8rem] text-black border-t-2 border-b-2 border-black"
          />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Uploaded Preview"
              className="w-[100px] h-[100px] object-cover"
            />
          )}

          <input
            placeholder="What are you thinking?"
            type="text"
            name="thoughts"
            value={formData.thoughts}
            onChange={handleChange}
            required
            className="text-[1.8rem] text-black border-t-2 border-b-2 border-black w-full"
          />

          <button
            type="submit"
            className="mt-[3rem] mx-auto w-[12rem] py-[1rem] text-white px-[4rem] rounded bg-black text-[1.4rem] uppercase"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
