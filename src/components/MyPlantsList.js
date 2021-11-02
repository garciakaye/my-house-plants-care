import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function MyPlantsList({ plant, onDeletePlant }){




return (
   
       <Row className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
           <Col className="align-items-stretch">
                <Card className="card">
                    <Card.Img variant="top" src={plant.image} alt={plant.commonName} />
                    <Card.Body className="card-body">
                        <Card.Title> {plant.commonName} </Card.Title>
                        <Card.Text> {plant.waterInstructions} </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
       </Row> 
    
    )
}




export default MyPlantsList;

