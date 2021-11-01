import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";


function NewPlantCard({ plant }) {


return (
    <Container fluid className="newly-added-plant">
    <Card>
        <Card.Header>Your new {plant.commonName} has been successfully added! Check out the details in the My Plants Page </Card.Header>
        <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
    </Card>
    </Container>  
)

}










export default NewPlantCard;