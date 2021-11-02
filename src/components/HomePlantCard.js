import React, {useState} from 'react';
import '../Home.css';
import { Card, Row, Col, Button } from "react-bootstrap";

function HomePlantCard( {plant, onDeletePlant} ) {
    const [waterPlant, setWaterPlant] = useState(false)
    
    return (
        <Row key={plant.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Col >
                        <Card border="dark" className="card">
                            <Card.Header className="card-header">{plant.commonName}</Card.Header>
                            <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
                            <Card.Body>
                                <Card.Text className="home-card-text">{plant.waterInstructions}</Card.Text>
                                {waterPlant ? (
                                    <Button
                                    onClick={() => setWaterPlant(false)}
                                    variant="light"
                                    className="emoji-button favorite active">💦</Button>
                                ) : (
                                    <Button
                                    onClick={() => setWaterPlant(true)}
                                    variant="light"
                                    className="emoji-button favorite">💦</Button>
                                )}
                                <Button plant-id={plant.id} className="btn-group-lg" variant="light" onClick={() => onDeletePlant(plant)}>🪦</Button>
                            </Card.Body>
                        </Card>
                    </Col>  
              </Row>
    )
}


export default HomePlantCard;