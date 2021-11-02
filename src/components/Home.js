import React from "react";
import '../Home.css';
import { format, getDay } from "date-fns";
import { Container } from "react-bootstrap";
import HomePlantCard from "./HomePlantCard";


function Home( {plants, onDeletePlant} ) {
    const date = new Date();
    const dayFormatted = format(date, "EEEE")
    const dateFormatted = format(date, "MMMM dd, yyyy")
    const currentDayIndex = getDay(date)
    
    
    const plantsToPrint = plants.reduce((plantsToWater, plant) => { 
        if(plant.waterSchedule.indexOf(currentDayIndex) > -1){plantsToWater.push(plant)
    }
    return plantsToWater
    },[])
    
    

    return (
     <div className="plants-to-water">
        <h1>It's {dayFormatted}, {dateFormatted}</h1>
        <h2>Please Water These Plants Today</h2>
        <Container className="home-plant-cards" fluid>  
            {plantsToPrint.map((plant) => {
                return ( 
                    <HomePlantCard key={plant.id} plant={plant} onDeletePlant={onDeletePlant} />  
                )
            })}
        </Container>
    </div>
  );
}

export default Home;

