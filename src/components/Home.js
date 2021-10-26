import React from "react";
import '../Home.css';
import { format, getDay } from "date-fns";

function Home( {plants} ) {
    // const [plants, setPlants] = useState([])
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
    <h1>It's {dayFormatted}, {dateFormatted}</h1>
    <h2>Please Take Care Of These Plants Today</h2>
    <ul className="scheduled-plants">
        {plantsToPrint.map((plants) => {
            return (
               <div className="column" key={plants.id}> 
                <h3>{plants.commonName}</h3>
                <img src={plants.image} alt={plants.commonName} />
                </div>
            )
        })}
    </ul>
  </div>
  );
}

export default Home;

