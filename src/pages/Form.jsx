import React, { useState,  useEffect } from "react";


const Form = () => {
    const [id, setId] = useState(()=> {
        const storedId = localStorage.getItem("currentId");
        return storedId ? parseInt(storedId, 10) : 0;
      });
    const [formData, setFormData] = useState({
        id: "",
        headline: "",
        mood: "",
        weather: "",
        imageUrl: "",
        thoughts: "",
        timestamp: new Date().toISOString().split("T")[0],
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); // useEffect will be used to handle form submission later
        const updatedFormData = {
            ...formData,
            id: id,
          };
          const existingData = JSON.parse(localStorage.getItem("formData")) || [];
          const newData = [updatedFormData, ...existingData];
          localStorage.setItem("formData", JSON.stringify(newData));


        // localStorage.setItem(`formData`, JSON.stringify(formData));
        console.log("Form submitted:", formData);
        const newId = id + 1;
        localStorage.setItem("currentId", newId);
        setId(newId);

    };
    
    const dateNow = new Date().toISOString().split("T")[0];
    console.log(dateNow);
    return (
    <div>
      <h1>Let’s Get Those Thoughts Flowing!</h1>

      <form onSubmit={handleSubmit}  className="flex flex-wrap flex-col">
        <label>
          What is going on?
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <select
            name="mood"
            id="mood"
            value={formData.mood}
            onChange={handleChange}
            required
          >
            <option value="">-- How is your mood? --</option>
            <option value="😊">😊Happy</option>
            <option value="😢">😢Sad</option>
            <option value="😠">😠Angry</option>
            <option value="😞">😞Depressed</option>
            <option value="😋">😋Hungry</option>
          </select>
        </label>
        <label>
          <input
            type="color"
            name="weather"
            id="weather"
            value={formData.weather || "#89CFF1"}
            onChange={handleChange}
            required
            list="presets"           
            ></input>
              </label>
            <datalist id="presets">
            <option value="#89CFF0">Baby Blue</option>
            <option value="#0000ff">Blue</option>
            <option value="#ffffff">White</option>
            <option value="#e5b88c">Mahogany</option>
            <option value="#cccccc">Grey</option>
            </datalist>
        <label>
          Got a picture?
          <input
            type="url"
            name="imageUrl"
            placeholder="Enter image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          What are you thinking?
          <input
            type="text"
            name="thoughts"
            value={formData.thoughts}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
