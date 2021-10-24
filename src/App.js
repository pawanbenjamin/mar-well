import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./assets/aqua-logo.svg";

import {
  Footer,
  Home,
  Nav,
  About,
  Treatments,
  Services,
  Faq,
  Contact,
} from "./components";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} /> */}
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/services" component={Services} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
