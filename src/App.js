import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer, Home, Nav, About } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
