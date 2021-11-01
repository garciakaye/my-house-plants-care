import React from "react";
import MyPlantsList from "./MyPlantsList";



function PlantDetails( {plants, onDeletePlant}){
    
    const renderPlantList = plants.map((plant) => {
        return <MyPlantsList  key={plant.id} plant={plant} onDeletePlant={onDeletePlant}/>
    })

    return (
        <div>
           {renderPlantList}
        </div>
    )
}



export default PlantDetails;
