import React from "react";
import '../MyPlantList.css';
import { Card, Row, Col, Button } from "react-bootstrap";

function MyPlantsList({ plant, onDeletePlant }){




return (
       <Row className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
           <Col className="align-items-stretch">
                <Card border="dark" className="plant-list-card">
                    <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
                    <Card.Body className="card-body">
                        <Card.Title>Common Name: {plant.commonName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Botanical Name: {plant.botanicalName}</Card.Subtitle>
                        <Card.Text>
                            💦 {plant.waterInstructions}
                            <br></br>
                            🌿 {plant.fertilizerSchedule}
                            <br></br>
                            <Button plant-id={plant.id} className="btn-xs" variant="none" onClick={() => onDeletePlant(plant)}>🪦 RIP</Button>  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
       </Row> 
    
    )
}




export default MyPlantsList;

