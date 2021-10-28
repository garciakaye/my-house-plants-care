import React from "react";
import '../Home.css';
import { format, getDay } from "date-fns";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

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
    <Container fluid className="scheduled-plants">  
        {plantsToPrint.map((plants) => {
            return ( 
                <Row key={plants.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Col>
                        <Card>
                            <Card.Header>{plants.commonName}</Card.Header>
                            <Card.Img variant="top" src={plants.image} alt={plants.commonName} />
                            <Card.Body>
                                <Card.Text>Text</Card.Text>
                                <Button className="btn-group-lg" variant="light">🪦</Button>
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

