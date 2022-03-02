import "./App.css";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import ToDo from "./ToDo";
import { React, useState } from "react";
import { BasicTable } from "./components/BasicTable";
import Nav from "./Nav";
let id = 0;

function App() {
  const [listItem, setItem] = useState(0);
  console.log(listItem);

  const [list, setList] = useState([]);

  const onAdd = (toDo) => {
    setList((prevVal) => [...prevVal, { id: (id += 1), toDo: toDo }]);
  };

  return (
    <div className="App">
      {/* Component insertion */}
      <Nav />
      <br></br>
      <BasicTable item={listItem} data={list} />
      <ToDo addItem={onAdd} />

      {/* Routing set-up, allows url switches based on paths below */}
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/table" element={<BasicTable />} />
      </Routes>
    </div>
  );
}

export default App;
