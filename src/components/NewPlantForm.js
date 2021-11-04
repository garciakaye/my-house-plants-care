import React, { useState } from "react";
import '../NewPlantForm.css';
import Multiselect from 'multiselect-react-dropdown';
import { Form } from "react-bootstrap";
import NewPlantCard from "./NewPlantCard"

// const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

function NewPlantForm() {
  const [newPlant, setNewPlant] = useState({}) 
  const [formData, setFormData] = useState({
    botanicalName: "",
    commonName: "",
    image: "",
    fertilizerSchedule: "",
    waterInstructions: "",
    waterSchedule: [],
  });

  const optionsArr = [{name: "Monday", id: 1},{name: "Tuesday", id: 2}, {name: "Wednesday", id: 3},{name: "Thursday", id: 4}, {name: "Friday", id: 5}, {name: "Saturday", id: 6}, {name: "Sunday", id: 0}]

  const initialFormValues = {
    botanicalName: "", 
    commonName: "",
    image: "",
    fertilizerSchedule: "",
    waterInstructions: "",
    waterSchedule: [],
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    const addedPlant = {
        botanicalName: formData.botanicalName,  
        commonName: formData.commonName,
        image: formData.image,
        fertilizerSchedule: formData.fertilizerSchedule,
        waterInstructions: formData.waterInstructions,
        waterSchedule: formData.waterSchedule,
      }
    fetch("http://localhost:3004/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addedPlant),
    })
        .then((r) => r.json())
        .then((newlyAddedPlant) => setNewPlant(newlyAddedPlant))
    setFormData(initialFormValues)
  }

    const renderPlantCard = plant => (
        <NewPlantCard
            key={plant.id}
            plant={plant}
        />
    )

  return (
    <section>
      <h1>Add Your New Plant</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Botanical Name:</Form.Label>
            <Form.Control className="form-control"
              id="botanicalName"
              type="text"
              name="botanicalName"
              placeholder="Dimorphotheca Aurantica"
              value={formData.botanicalName}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Common Name:</Form.Label>
          <Form.Control className="form-control"
              id="commonName"
              type="text"
              name="commonName"
              placeholder="African Daisy"
              value={formData.commonName}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control className="form-control"
              id="image"
              type="text"
              name="image"
              placeholder="https://www.example/image.jpg"
              value={formData.image}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fertilizer Care (optional):</Form.Label>
          <Form.Control className="form-control"
              id="fertilizerSchedule"
              type="text"
              name="fertilizerSchedule"
              placeholder="Once a month"
              value={formData.fertilizerSchedule}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Water Instructions (optional):</Form.Label>
          <Form.Control className="form-control"
              id="waterInstructions"
              type="text"
              name="waterInstructions"
              placeholder="Water if topsoil is completely dry"
              value={formData.waterInstructions}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Water Schedule:</Form.Label>
            <Multiselect
              id="css_custom" 
              options={optionsArr} 
              displayValue="name" 
              name="waterSchedule" 
              placeholder="📅" 
              showCheckbox 
              style={{
                chips: {
                  background: 'grey'
                },
                multiselectContainer: {
                  color: 'grey'
                }
                }}
                onSelect={(allDaysOfWeek, selectedDayOfWeek) => {
                  const daysOfWeek = allDaysOfWeek.map(dayOfWeek => dayOfWeek.id);
                  setFormData({...formData, waterSchedule: daysOfWeek})
                }}
            />
        </Form.Group>
          <button className="add-new-plant-btn" type="submit">🪴Add New Plant🪴</button>
      </Form>
      {newPlant.id
      ? renderPlantCard(newPlant)
      : null
      }  
    </section>
  );
}


export default NewPlantForm;
