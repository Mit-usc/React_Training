import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Edit from "./Edit";
import ToDo from "./ToDo";
import { React, useState } from "react";
import { BasicTable } from "./components/BasicTable";
import Nav from "./Nav";
import Delete from "./components/Delete";

let id = 5;

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      toDo: "reinvent impactful deliverables",
    },
    {
      id: 2,
      toDo: "enable cross-platform infomediaries",
    },
    {
      id: 3,
      toDo: "synergize turn-key methodologies",
    },
    {
      id: 4,
      toDo: "engage web-enabled e-business",
    },
    {
      id: 5,
      toDo: "evolve magnetic supply-chains",
    },
  ]);

  // Function to add a specific to-do task to current list
  const onAdd = (toDo) => {
    setList((prevVal) => [...prevVal, { id: (id += 1), toDo: toDo }]);
  };

  // Function to edit a specific to-do task
  const onEdit = (editData) => {
    var index = 0;

    // Loops through all entries within to-do list and edits the specific user-inputted index
    var newArr = Object.entries(list).map(([key, value]) => {
      index++;
      // eslint-disable-next-line eqeqeq
      if (value.id == editData.id) {
        return { id: index, toDo: editData.item };
      }
      return { id: index, toDo: value.toDo };
    });
    setList(newArr);
  };

  // Function to delete a specific to-do task
  const onDelete = (data) => {
    console.log(data);
    const idToDelete = data.id2;
    // Loops through all entries within to-do list and only adds non-to-delete values
    var newArr = list.filter((item) => {
      console.log(item.id, typeof item.id, typeof idToDelete, idToDelete);
      return item.id !== Number(idToDelete);
    });
    setList(newArr);
  };

  return (
    <div className="App">
      {/* Component insertion */}
      <Nav />
      <br></br>

      <BasicTable data={list} />

      {/* Routing set-up, allows url switches based on paths below */}

      <Routes>
        <Route path="/todo" element={<ToDo addItem={onAdd} />} />
        <Route
          path="/edit/:id"
          element={<Edit editItem={onEdit} deleteItem={onDelete} />}
        />
        <Route path="/table" element={<BasicTable data={list} />} />
        <Route path="/delete" element={<Delete deleteItem={onDelete} />} />
      </Routes>
    </div>
  );
}

export default App;
