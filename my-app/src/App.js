import "./App.css";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import ToDo from "./ToDo";
import { React, useState } from "react";
import { BasicTable } from "./components/BasicTable";
import Nav from "./Nav";
let id = 5;

function App() {
  const [listItem, setItem] = useState(0);
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
  const onDelete = (indexDelete) => {
    var index = 0;

    // Loops through all entries within to-do list and only adds non-to-delete values
    var newArr = Object.entries(list).map(([key, value]) => {
      index++;
      // eslint-disable-next-line eqeqeq
      if (value.id == indexDelete.id2) {
        index--;
        return false;
      } else {
        return { id: index, toDo: value.toDo };
      }
    });

    id--;
    // removes false value from array generated above (logic should be better optimized here)
    const newArr2 = newArr.filter((val) => val !== false);
    console.log(newArr2);
    setList(newArr2);
  };

  return (
    <div className="App">
      {/* Component insertion */}
      <Nav />
      <br></br>

      <BasicTable item={listItem} data={list} />
      {/*
      <ToDo addItem={onAdd} />
      <Edit editItem={onEdit} deleteItem={onDelete} />
      */}

      {/* Routing set-up, allows url switches based on paths below */}
      <Routes>
        <Route path="/todo" element={<ToDo addItem={onAdd} />} />
        <Route
          path="/edit"
          element={<Edit editItem={onEdit} deleteItem={onDelete} />}
        />
        <Route
          path="/table"
          element={<BasicTable item={listItem} data={list} />}
        />
      </Routes>
    </div>
  );
}

export default App;
