import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function MyPlantsList({ plant, onDeletePlant }){

    return (
        <Container fluid className="plant-list">
        <Card>
            <Card.Header>{plant.commonName} </Card.Header>
            <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
        </Card>
        </Container>  
        )
}




export default MyPlantsList;