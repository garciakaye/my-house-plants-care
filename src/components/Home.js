import React from "react";
import '../Home.css';
import { format, getDay } from "date-fns";
import { Card, Container, Row, Col } from "react-bootstrap";

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
    <Container className="scheduled-plants">  
        {plantsToPrint.map((plants) => {
            return ( 
                <Row key={plants.id} className='row-cols-2 row-cols-md-3 g-4'>
                    <Col className="column">
                        <Card className='h-100'>
                            <Card.Img variant="top" src={plants.image} alt={plants.commonName} />
                            <Card.Body>
                                <Card.Text>{plants.commonName} <button type="button" className="btn btn-link">🪦</button> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
              </Row>    
            )
        })}
    </Container> 
  </div>
  );
}

export default Home;

