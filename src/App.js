import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path=':id' element={<Movie />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
