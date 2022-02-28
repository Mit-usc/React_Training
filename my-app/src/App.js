import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Edit from "./Edit";
import ToDo from "./ToDo";

function App() {
  const arr = ["a", "b", "c"];
  arr.map((a) => console.log(a));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TO-DO ------ App</p>

        {/* Routing set-up, allows url switches based on paths below */}
        <Router>
          <Routes>
            <Route path="" element={<App />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
