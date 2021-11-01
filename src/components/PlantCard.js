import React from "react";


function PlantCard({ plant, onDeletePlant }) {


return (
    <div>
    <h1>{plant.commonName}</h1>
    <img src={plant.image}/>
    </div>    
)

}










export default PlantCard;