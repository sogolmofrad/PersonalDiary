import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Let’s Get Those Thoughts Flowing!</h1>

      <form action="">
        <label>What is going on?
          <input type="text" />
        </label>
        <label>
        <select
                  name=""
                  id=""
                  
                >
                  <option value="">-- How is your mood? --</option>
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                  <option value="angry">Angry</option>
                  <option value="depressed">Depressed</option>
                  <option value="hungry">Hungry</option>
                </select>
        </label>
        <label>How is the weather?
          <input type="text" />
        </label>
        <label>Got a picture?
          <input type="text" />
        </label>
        <label>What are you thinking?
          <input type="text" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
