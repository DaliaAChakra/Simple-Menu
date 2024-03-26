import "./App.css";
import About from "./about";
import Navbar from "./Navbar";
import Contact from "./contact";
import Home from "./Home";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h3>Restaurant Name</h3>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Menu">
          <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
