import React from "react";
import '../NewPlantCard.css';
import { Card, Container } from "react-bootstrap";


function NewPlantCard({ plant }) {


return (
    <Container className="newly-added-plant">
    <Card className="new-plant-card">
        <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
        <Card.Body className="new-plant-card-body">
        <Card.Title>Your new {plant.commonName} has been successfully added! </Card.Title>
        </Card.Body>
        
    </Card>
    </Container>  
)

}










export default NewPlantCard;