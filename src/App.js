import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./app/components/index";
import Home from "./app/pages/Home";
import Details from "./app/pages/Details";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
