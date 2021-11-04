import React, { useEffect, useState} from "react";
// import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NewPlantForm from "./NewPlantForm";
import PlantDetails from "./PlantDetails"

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/plants")
    .then((r) => r.json())
    .then((plants) => setPlants(plants))
}, [])

  function handleDeletePlant(deletedPlant) {
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id);
    setPlants(updatedPlants)
    
      fetch(`http://localhost:3004/plants/${deletedPlant.id}`, {
          method: "DELETE",
      })
          .then((r) => r.json())
          .then(() => console.log)
  }

  
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home 
          plants={plants}
          onDeletePlant={handleDeletePlant}
          />
      </Route>
      <Route exact path="/new-plant">
        <NewPlantForm onAddPlant={handleAddPlant}/>
      </Route>
      <Route exact path="/my-plants">
        <PlantDetails 
          plants={plants}
          onDeletePlant={handleDeletePlant}
        />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
