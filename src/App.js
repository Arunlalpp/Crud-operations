import "./App.css";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import erase from "./Components/erase/erase";
import Update from "./Components/Update/Update";

function App() {
  return (
    <Router>
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <div>
      <Route exact path='/' component={Create} />
      </div>
      <div style={{marginTop: 20}}>
      <Route path= '/Read' component={Read}/>
        <Read />
      </div>
      <Route path= '/Update' component={Update} />
      <Route path= '/erase' component={erase} />
    </div>
    </Router>
  );
}

export default App;
