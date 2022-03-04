import "./components/todo.css";
import { React, useState } from "react";

function ToDo(props) {
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const [listItem, setItem] = useState("Tidy up workstation");

  return (
    <div class="login-box">
      <div class="user-box">
        <h2>Add Item</h2>
        <input
          onChange={handleChange}
          type="text"
          name="listItem"
          id="listItem"
        />
      </div>
      <button onClick={() => props.addItem(listItem)}>Submit</button>
    </div>
  );
}

export default ToDo;
