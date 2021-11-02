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
     <div className="date">
         {

         }
        <h1>It's {dayFormatted}, {dateFormatted}</h1>
        <h2>Please Take Care Of These Plants Today</h2>
    <Container className="scheduled-plants" fluid>  
        {plantsToPrint.map((plant) => {
            return ( 
                <HomePlantCard plant={plant} onDeletePlant={onDeletePlant} />  
            )
        })}
    </Container>
  </div>
  );
}

export default Home;

