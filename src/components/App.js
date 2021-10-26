import React from "react";
// import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
