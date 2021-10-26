import React, { useEffect, useState} from "react";
import '../Home.css';
import { format, getDay } from "date-fns";

function Home() {
    const [plants, setPlants] = useState([])
    const date = new Date();
    const dayFormatted = format(date, "EEEE")
    const dateFormatted = format(date, "MMMM dd, yyyy")

    const currentDayIndex = getDay(date)
    
    useEffect(() => {
        fetch("http://localhost:3004/plants")
        .then((r) => r.json())
        .then((plants) => setPlants(plants))
    }, [])



    const plantsToPrint = plants.filter((plant) => plant.waterSchedule.filter((dayIndex) => dayIndex !== currentDayIndex))
    
    // const plantsArr = plantsToPrint.map((plant) => (
    //     <div key={plant.commonName}>
    //         <h3>{plant.commonName}</h3>
    //         <ul>
    //             {plant.commonName}
    //         </ul>
    //     </div>
    // ))

    // const plantSchedule = plants.filter(plant => plant.waterSchedule === dayFormatted).map(scheduledPlant =>
    //     <li key={scheduledPlant.waterSchedule}> {scheduledPlant.waterSchedule} </li> )

    return (
  <div className="date">
    <h1>It's {dayFormatted}, {dateFormatted}</h1>
    <h2>Please Take Care Of These Plants Today</h2>
    <ul className="scheduled-plants">
        {plantsToPrint.map(({commonName}) => {
            return (
                <h2>{commonName}</h2>
            )
        })}
    </ul>
  </div>
  );
}

export default Home;

