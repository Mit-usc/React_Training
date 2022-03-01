import "./App.css";
import { React, useState } from "react";

function ToDo() {
  const handleChange = (event) => {
    //this.props.parentCallback(event.target.value);
    setItem(event.target.value);
    console.log(listItem);
  };

  const [listItem, setItem] = useState(0);

  return (
    <div>
      <h1>Add a To-Do item</h1>
      <input
        onChange={handleChange}
        type="text"
        name="listItem"
        id="listItem"
      />
    </div>
  );
}

export default ToDo;
