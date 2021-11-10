import React, { useState } from "react";

function Counter() {
    const [text, setText] = useState("");
    const [totalCount, setTotalCount] = useState(0)
    
    function handleClick() {
        setTotalCount(totalCount + text.length);
        setText("")
    }


return (
    <div>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <p>{totalCount}</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
)
}


// const plantsToPrint = plants?.reduce((plantsToWater, plant) => { 
//     if(plant.waterSchedule.indexOf(currentDayIndex) > -1){plantsToWater.push(plant)
//     }
//     return plantsToWater
//     },[])

export default Counter;

// text input
// cick me button that reset input
// counter must equal 'hello world' and 'goodbye'