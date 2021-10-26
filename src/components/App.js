import React, { useEffect, useState} from "react";
// import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NewPlantForm from "./NewPlantForm"

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/plants")
    .then((r) => r.json())
    .then((plants) => setPlants(plants))
}, [])

  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home plants={plants}/>
      </Route>
      <Route exact path="/new-plant">
        <NewPlantForm />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
