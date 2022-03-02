import "./App.css";
import { React, useState } from "react";

function ToDo(props) {
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const [listItem, setItem] = useState("Tidy up workstation");

  return (
    <div>
      <h1>Add a To-Do item</h1>
      <input
        onChange={handleChange}
        type="text"
        name="listItem"
        id="listItem"
      />
      <button onClick={() => props.addItem(listItem)}>Submit</button>
    </div>
  );
}

export default ToDo;
