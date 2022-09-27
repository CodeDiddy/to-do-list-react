import Home from "./componenten/Home";
import Navbar from "./componenten/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NieuweTaak from "./componenten/NieuweTaak";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/creeer">
            <NieuweTaak />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
