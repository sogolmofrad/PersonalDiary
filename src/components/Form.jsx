import { useState } from "react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(() => {
    const storedId = localStorage.getItem("currentId");
    return storedId ? parseInt(storedId, 10) : 0;
  });
  const [formData, setFormData] = useState({
    id: "",
    headline: "",
    mood: "",
    weather: "",
    imageUrl: "", // this will hold the uploaded image URL
    thoughts: "",
    timestamp: new Date().toISOString().split("T")[0],
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image file upload and convert to base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imageUrl: reader.result, // Store base64 image string or URL
        });
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default submission
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

    setIsModalOpen(false);
  };

  const dateNow = new Date().toISOString().split("T")[0];
  console.log(dateNow);

  return (
    <>
      <input
        type="checkbox"
        id="formModal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)} // Toggle modal visibility
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

          <datalist id="presets">
            <option value="#89CFF0">Baby Blue</option>
            <option value="#0000ff">Blue</option>
            <option value="#ffffff">White</option>
            <option value="#e5b88c">Mahogany</option>
            <option value="#cccccc">Grey</option>
          </datalist>

          {/* File input for image upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload} // Handle file upload
            className="text-[1.8rem] text-black border-t-2 border-b-2 border-black"
          />

          {/* Preview the uploaded image */}
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Uploaded"
              className="mt-4 w-[200px] h-[200px] object-cover"
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
        <label className="modal-backdrop" htmlFor="formModal">
          Close
        </label>
      </div>
    </>
  );
};

export default Form;
