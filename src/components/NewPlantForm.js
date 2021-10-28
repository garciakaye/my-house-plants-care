import React, { useState } from "react";
import '../NewPlantForm.css';
import Multiselect from 'multiselect-react-dropdown';
import { Form } from "react-bootstrap";

// const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

function NewPlantForm() {
  const [formData, setFormData] = useState({
    botanicalName: "",
    commonName: "",
    image: "",
    waterSchedule: [],
  });

  const optionsArr = [{name: "Monday", id: 1},{name: "Tuesday", id: 2}, {name: "Wednesday", id: 3},{name: "Thursday", id: 4}, {name: "Friday", id: 4}, {name: "Saturday", id: 6}, {name: "Sunday", id: 0}]

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    fetch("http://localhost:3004/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        botanicalName: formData.botanicalName,  
        commonName: formData.commonName,
        image: formData.image,
        waterSchedule: formData.waterSchedule,
      }),
    });
  }

  return (
    <section>
      <h1>Add Your New Plant</h1>
      <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
          <Form.Label>Botanical Name:</Form.Label>
          <input className="form-control"
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
          <input className="form-control"
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
          <input className="form-control"
            id="image"
            type="text"
            name="image"
            placeholder="https://www.example/image.jpg"
            value={formData.image}
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
                    setFormData({...formData, waterSchedule: daysOfWeek})}}
            />
        </Form.Group>
        <button type="submit">🪴Add New Plant🪴</button>
      </Form>
    </section>
  );
}


export default NewPlantForm;
