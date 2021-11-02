import React, {useState} from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";

function HomePlantCard( {plant, onDeletePlant} ) {
    const [waterPlant, setWaterPlant] = useState(false)
    
    return (
        <Row key={plant.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Col className="align-items-stretch" >
                        <Card className="card">
                            <Card.Header>{plant.commonName}</Card.Header>
                            <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
                            <Card.Body>
                                <Card.Text>{plant.waterInstructions}</Card.Text>
                                {waterPlant ? (
                                    <Button
                                    onClick={() => setWaterPlant(false)}
                                    variant="light"
                                    className="emoji-button favorite active">💧</Button>
                                ) : (
                                    <Button
                                    onClick={() => setWaterPlant(true)}
                                    variant="light"
                                    className="emoji-button favorite">💧</Button>
                                )}
                                <Button plant-id={plant.id} className="btn-group-lg" variant="light" onClick={() => onDeletePlant(plant)}>🪦</Button>
                            </Card.Body>
                        </Card>
                    </Col>  
              </Row>
    )
}


export default HomePlantCard;