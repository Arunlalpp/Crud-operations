import "./App.css";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";

function App() {
  return (
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <div>
        <Create />
      </div>
      <div>
        <Read />
      </div>
    </div>
  );
}

export default App;
