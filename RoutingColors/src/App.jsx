import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/Green";
import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/green">Green</Link>
        </div>
        <div id="main-section">
          {
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/red" element={<Red />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/green" element={<Green />} />
            </Routes>
          }
        </div>
      </div>
    </>
  );
}

export default App;
