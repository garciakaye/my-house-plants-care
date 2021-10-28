import React, { useState } from "react";
import '../NewPlantForm.css';
import Multiselect from 'multiselect-react-dropdown';

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
    // const stringToArray = formData.waterSchedule.toLowerCase().replace(/[, ]+/g, " ").trim().split(" ")
    // const daysToWater = stringToArray.map((day) => weekDays.indexOf(day))
    //   map will iterate on each iteration it will return an array that contains each value of the iteration
    // const dayArray = formData.waterSchedule.filter((selectedDay) => selectedDay.value !== formData.waterSchedule)
    // const daysToWater = dayArray.map((day) => weekDays.indexOf(day))
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
      <h1>New Plant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Botanical Name:
          <input
            type="text"
            name="botanicalName"
            value={formData.botanicalName}
            onChange={handleChange}
          />
        </label>
        <label>
          Common Name:
          <input
            type="text"
            name="commonName"
            value={formData.commonName}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Water Schedule:
            <Multiselect
                options={optionsArr} displayValue="name" name="waterSchedule" placeholder="📅" showCheckbox onSelect={(allDaysOfWeek, selectedDayOfWeek) => {
                    const daysOfWeek = allDaysOfWeek.map(dayOfWeek => dayOfWeek.id);
                    setFormData({...formData, waterSchedule: daysOfWeek})}}
            />
        </label>
        <button type="submit">Add New Plant</button>
      </form>
    </section>
  );
}


export default NewPlantForm;
