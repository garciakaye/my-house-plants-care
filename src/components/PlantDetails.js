import React from "react";
import MyPlantsList from "./MyPlantsList";
import {Container} from "react-bootstrap";


function PlantDetails( {plants, onDeletePlant}){
    
    const renderPlantList = plants.map((plant) => {
        return <MyPlantsList  key={plant.id} plant={plant} onDeletePlant={onDeletePlant}/>
    })

    return (
        <Container fluid>
           {renderPlantList}
        </Container>
    )
}



export default PlantDetails;
