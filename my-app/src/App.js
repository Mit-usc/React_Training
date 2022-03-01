import "./App.css";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import ToDo from "./ToDo";
import React from "react";
import { BasicTable } from "./components/BasicTable";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* Component insertion */}
      <Nav />
      <br></br>
      <BasicTable />
      <ToDo />

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
