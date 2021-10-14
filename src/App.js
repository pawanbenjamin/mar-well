import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer, Home, Nav } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
