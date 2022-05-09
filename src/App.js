import "./App.css";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erase from "./Components/Erase/Erase";
import Update from "./Components/Update/Update";

function App() {
  return (
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />

          <Route exact path="/Read" element={<Read />} />

          <Route path="/Update" element={<Update />} />
          <Route path="/Erase"  element={<Erase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
