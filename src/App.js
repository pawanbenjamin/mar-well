import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Mariposa Wellness LLC - Home</title>
        <meta name="description" content="Pelvic Healthy Physical Therapy" />
        <meta
          name="keywords"
          content="Pelvic, Health, Pelvic Health, Physical Therapy, DC, DMV"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
